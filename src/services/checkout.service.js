// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const checkoutService = {
    book
};



function book(bookingDetails) {
  
    return axios.post(`${baseURL}/booking`, bookingDetails)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


