const axios = require('axios');
const baseURL = "http://localhost:8080"

export const searchBarServices = {
    suggestProducts,
    searchProducts,
    productDetails
};


function suggestProducts(searchQuery) {

    return axios.get(`${baseURL}/product/search?search=${searchQuery}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}

function searchProducts(searchQuery) {

    return axios.get(`${baseURL}/product/search?search=${searchQuery}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}

function productDetails(productId) {
    return axios.get(`${baseURL}/product/product?id=${productId}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })
}