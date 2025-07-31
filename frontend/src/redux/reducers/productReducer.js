// src/redux/reducers/productReducer.js

// Define an initial state that is NOT undefined
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return { ...state, loading: true, error: null };

    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, loading: false, items: action.payload };

    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state; // <-- this makes sure the state is never undefined
  }
};

export default getProductsReducer;
