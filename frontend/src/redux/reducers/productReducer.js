
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from '../constants/productConstant';
import { GET_PRODUCT_DETAILS_FAIL,GET_PRODUCT_DETAILS_RESET,GET_PRODUCT_DETAILS_SUCCESS,GET_PRODUCT_DETAILS_REQUEST } from '../constants/productConstant';

const initialState = {
  products: [],
  loading: false,
  error: null
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};





export const getProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: null,
      };

    case GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        product: {},
        error: action.payload,
      };

    case GET_PRODUCT_DETAILS_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};



