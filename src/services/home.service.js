// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const homeService = {
    viewCategory,
};



function viewCategory(categories) {


    const request = categories.map(category => {
        return axios.get(`${baseURL}/product/home?category=${category}`);
    })


    return axios.all(request)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return Promise.reject(err.response.data.message);
        })

}



