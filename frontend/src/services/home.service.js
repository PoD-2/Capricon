// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const homeService = {
    viewCategory,
};



async function viewCategory(categories) {


    const request = categories.map(category => {
        return axios.get(`${baseURL}/product/home?category=${category}`);
    })

    return axios.all(request)
        .then(axios.spread((firstResponse, secondResponse, thirdResponse, forthResponse) => {
            return [firstResponse.data, secondResponse.data, thirdResponse.data, forthResponse.data];
        }))
        .catch(error => {
            return Promise.reject(error.response.data.message);
        });


}



