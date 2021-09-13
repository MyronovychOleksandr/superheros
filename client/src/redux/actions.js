import { createAction } from "@reduxjs/toolkit";

const addHeroRequest = createAction("heros/addRequest");
const addHeroSuccess = createAction("heros/addSuccess");
const addHeroError = createAction("heros/addError");

const fetchHerosRequest = createAction("heros/fetchRequest");
const fetchHerosSuccess = createAction("heros/fetchSuccess");
const fetchHerosError = createAction("heros/fetchError");

const fetchOneHeroRequest = createAction("heros/fetchOneRequest");
const fetchOneHeroSuccess = createAction("heros/fetchOneSuccess");
const fetchOneHeroError = createAction("heros/fetchOneError");

const removeHeroRequest = createAction("heros/removeRequest");
const removeHeroSuccess = createAction("heros/removeSuccess");
const removeHeroError = createAction("heros/removeError");

const editHeroRequest = createAction("heros/editRequest");
const editHeroSuccess = createAction("heros/editSuccess");
const editHeroError = createAction("heros/editError");

export default {
  addHeroRequest,
  addHeroSuccess,
  addHeroError,
  fetchHerosRequest,
  fetchHerosSuccess,
  fetchHerosError,
  removeHeroRequest,
  removeHeroSuccess,
  removeHeroError,
  editHeroRequest,
  editHeroSuccess,
  editHeroError,
  fetchOneHeroRequest,
  fetchOneHeroSuccess,
  fetchOneHeroError,
};
