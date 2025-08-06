// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import {getProductsReducer, getProductDetailsReducer }from './reducers/productReducer'; // no .js needed if using modern setup
import {cartReducer } from './reducers/cartReducer';


const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
  },
  devTools: true,
});

export default store;
