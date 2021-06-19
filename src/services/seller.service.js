// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const sellerService = {
    addProduct
};



function addProduct(product, sellerId, setProgress) {
  
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

