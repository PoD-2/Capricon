// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const sellerProductService = {
    add,
    view,
    changeQuantity
};



function add(product, sellerId, setProgress) {
  
    return axios.post(`${baseURL}/seller/${sellerId}/addProduct`, product, {
        onUploadProgress: ProgressEvent => {
            setProgress(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
        }
    })
    .then(res => {
        
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function view(sellerId) {
  
    return axios.get(`${baseURL}/seller/${sellerId}/viewProduct`)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function changeQuantity(productId, qtyChange, sellerId) {
    return axios.put(`${baseURL}/seller/${sellerId}/${productId}/changeQty?qty=${qtyChange}`)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })
}