// src/redux/actions/productActions.js

import axios from "axios";
import * as actionType from '../constants/productConstant';

const URL = 'http://localhost:8000'; // ✅ Corrected

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCTS_REQUEST });

    let response = await axios.get(`${URL}/products`);
    dispatch({
      type: actionType.GET_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};
