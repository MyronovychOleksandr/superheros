import axios from "axios";
import productsActions from "./actions";

const productUrl = "http://localhost:5000/api/hero";

const addHero = (product) => (dispatch) => {
  dispatch(productsActions.addHeroRequest());

  axios
    .post(`${productUrl}`, { ...product })
    .then((response) => {
      dispatch(productsActions.addHeroSuccess(response.data));
    })
    .catch((error) => dispatch(productsActions.addHeroError(error)));
};

const fetchHeros = () => (dispatch) => {
  dispatch(productsActions.fetchHerosRequest());

  axios
    .get(`${productUrl}`)
    .then(({ data }) => {
      dispatch(productsActions.fetchHerosSuccess(data.superheros));
    })
    .catch((error) => dispatch(productsActions.fetchHerosError(error)));
};

const removeHero = (id) => (dispatch) => {
  dispatch(productsActions.removeHeroRequest());

  axios
    .delete(`${productUrl}/${id}`)
    .then(() => dispatch(productsActions.removeHeroSuccess(id)))
    .catch((error) => dispatch(productsActions.removeHeroError(error)));
};

const editHero = (product, id) => (dispatch) => {
  dispatch(productsActions.editHeroRequest());

  axios
    .patch(`${productUrl}/${id}`, { ...product })
    .then((response) => {
      dispatch(productsActions.editHeroSuccess(response.data.superhero));
    })
    .catch((error) => dispatch(productsActions.editHeroError(error)));
};

const getOneHero = (id) => (dispatch) => {
  dispatch(productsActions.fetchOneHeroRequest());

  axios
    .get(`${productUrl}/${id}`)
    .then((response) => {
      dispatch(productsActions.fetchOneHeroSuccess(response.data.superhero));
    })
    .catch((error) => dispatch(productsActions.fetchOneHeroError(error)));
};

export default {
  addHero,
  fetchHeros,
  removeHero,
  editHero,
  getOneHero,
};
