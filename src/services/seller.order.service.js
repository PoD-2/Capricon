// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const sellerOrderService = {
    viewOrderHistory,
    viewOrderStatus,
    changeOrderStatus
};



function viewOrderHistory(sellerId) {
  
    return axios.get(`${baseURL}/seller/${sellerId}/orderHistory`)
    .then(res => {
        
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function viewOrderStatus(sellerId) {
  
    return axios.get(`${baseURL}/seller/${sellerId}/viewProduct`)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function changeOrderStatus(productId, qtyChange, sellerId) {
    return axios.put(`${baseURL}/seller/${sellerId}/${productId}/changeQty?qty=${qtyChange}`)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })
}