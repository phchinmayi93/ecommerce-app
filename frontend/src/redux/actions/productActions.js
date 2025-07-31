
import axios from "axios";





const URL= 'http:/localhost:8000';

export const getProducts = () => {
    try {
     let response =   axios.get(`${URL}/products`);
    } catch (error) {
        console.log('Error while calling getProducts api', error.message);
    }
}