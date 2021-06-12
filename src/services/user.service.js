// import config from 'config';

const baseURL = "http://localhost:8080"

export const userService = {
    login,
    logout,
    register
};

function login(user, remember) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': 'true'},
        body: JSON.stringify(user) 
    };

    return fetch(`${baseURL}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(remember){
                localStorage.setItem('user', JSON.stringify(user));
            }   
                 
            return user;
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function register(user, remember) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': 'true' },
        body: JSON.stringify(user) 
    };

    return fetch(`${baseURL}/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if(remember){
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        })
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}