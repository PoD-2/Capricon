const axios = require('axios');
const baseURL = "http://localhost:8080"

export const userOrderService = {
    viewOrderHistory,
    viewOrderStatus
};

function viewOrderHistory(userId) {
  
    return axios.get(`${baseURL}/booking/${userId}/orders`)
    .then(res => {
        
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}

function viewOrderStatus(userId) {
  
    return axios.get(`${baseURL}/booking/${userId}/orderStatus`)
    .then(res => {
        
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}