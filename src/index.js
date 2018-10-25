import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// Authorization header could also be added here:
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
// not needed in this case, but here is an example of requiring posts to json
axios.defaults.headers.post['Content-Type'] = 'applcation/json'

// To see and edit the configuration of the incoming data:

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig)
    // Edit requestConfig, e.g. add authorizaton header
    return requestConfig
}, error => {
    console.log(error)
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log(response)
    // Edit response
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
