import axios from "axios";
import * as actionHype from '../constants/cartConstatnt'; // fixed spelling

const URL = 'http://localhost:8000';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({
            type: actionHype.ADD_TO_CART,
            payload: { ...data, quantity }
        });
    } catch (error) {
        dispatch({
            type: actionHype.ADD_TO_CART_ERROR,
            payload: error.message,
        });
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionHype.REMOVE_FROM_CART,
        payload: id
    });
};

export const incrementCartItem = (id) => ({
  type: actionHype.INCREMENT_CART_ITEM,
  payload: id,
});

export const decrementCartItem = (id) => ({
  type: actionHype.DECREMENT_CART_ITEM,
  payload: id,
});
