import { combineReducers } from "redux";
import { createReducer, current } from "@reduxjs/toolkit";
import productActions from "./actions";

const addProduct = (state, action) => {
  return [...state, action.payload];
};

const removeProduct = (state, action) => {
  return current(state).filter((hero) => hero._id !== action.payload);
};

const heros = createReducer([], {
  [productActions.fetchHerosSuccess]: (state, action) => action.payload,
  [productActions.addHeroSuccess]: addProduct,
  [productActions.removeHeroSuccess]: removeProduct,
  [productActions.fetchOneHeroSuccess]: (state, action) => [action.payload],
});

export default combineReducers({
  heros,
});
