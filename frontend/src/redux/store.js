// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import {getProductsReducer, getProductDetailsReducer }from './reducers/productReducer'; // no .js needed if using modern setup

const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer
  },
  devTools: true,
});

export default store;
