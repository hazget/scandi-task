import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../GraphQL/Queries";

function withParams(Component, properties) {
  return (props) => {
    const {  data } = useQuery(GET_DATA);
    const dispatch = useDispatch();
    let selectedProperties = {};
    properties.forEach(prop => {
      const selected = useSelector((state) => state[prop]);
      selectedProperties[prop] = selected;
    })
    return <Component {...props} params={useParams()} dispatch={dispatch} {...selectedProperties} allData={data} />
  }
}

export default withParams;