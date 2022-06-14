import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React from "react";
import { onError } from "@apollo/client/link/error";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import MainWrap from "./components/layout/MainWrap";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`GraphQL error: ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(calculateTotals(currency));
  }, [cartItems]);
  
  return (
    <ApolloProvider client={client}>
      <MainWrap />
    </ApolloProvider>
  );
}

export default App;
