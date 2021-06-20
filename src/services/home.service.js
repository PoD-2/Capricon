// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const homeService = {
    viewCategory,
};



async function viewCategory(categories) {


    // const request = categories.map(category => {
    //     return axios.get(`${baseURL}/product/home?category=${category}`);
    // })

    // const [firstResponse, secondResponse,thirdResponse] = await Promise.all([
    //     axios.get(`${baseURL}/product/home?category=${categories[0]}`),
    //     axios.get(`${baseURL}/product/home?category=${categories[1]}`),
    //     axios.get(`${baseURL}/product/home?category=${categories[2]}`)
    //   ]);
    //         return [firstResponse.data, secondResponse.data, thirdResponse.data];


    axios.all([axios.get(`${baseURL}/product/home?category=${categories[0]}`),
    axios.get(`${baseURL}/product/home?category=${categories[1]}`),
    axios.get(`${baseURL}/product/home?category=${categories[2]}`)])
        .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
            console.log(firstResponse.data, secondResponse.data, thirdResponse.data);
            return [firstResponse.data, secondResponse.data, thirdResponse.data];
        }))
        .catch(error => console.log(error));


}



