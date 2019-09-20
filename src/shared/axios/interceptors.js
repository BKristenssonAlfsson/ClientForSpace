import axios from 'axios';

axios.interceptors.response.use(function (config) {
    console.log(config);

    return config;
});