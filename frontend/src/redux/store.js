// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import getProductsReducer from './reducers/productReducer'; // no .js needed if using modern setup

const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
  },
  devTools: true,
});

export default store;
