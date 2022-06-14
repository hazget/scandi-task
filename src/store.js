import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import setProductReducer from "./features/set_product/setProductSlice";
import currencyReducer from "./features/currency/currencySlice";
import minicartBackdropReducer from "./features/backdrops/minicartBackdrop";
import currenciesBackdropReducer from "./features/backdrops/currenciesBackdrop";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
  setProduct: setProductReducer,
  currency: currencyReducer,
  minicartBackdrop: minicartBackdropReducer,
  currenciesBackdrop: currenciesBackdropReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
