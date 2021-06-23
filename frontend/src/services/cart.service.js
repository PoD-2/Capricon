// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const cartService = {
    add,
    remove,
    view
};



function add(userId, productId) {
  
    return axios.post(`${baseURL}/addCart?userId=${userId}&productId=${productId}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}



function remove(userId, productId) {
  
        return axios.delete(`${baseURL}/removeCart?userId=${userId}&productId=${productId}`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return Promise.reject(err.response.data.message);
        })
        
}


function view(userId) {
  
    return axios.get(`${baseURL}/viewCart?userId=${userId}`)
    .then(Response => {
        return Response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data);
    })
    
}

