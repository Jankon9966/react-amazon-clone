import axios from "axios";

const URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchProduct = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};