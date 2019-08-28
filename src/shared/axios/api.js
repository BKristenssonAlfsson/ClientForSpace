import axios from 'axios'

const NASA_URL = 'https://api.nasa.gov/';
const NASA_KEY = 'api_key=DEMO_KEY';

const BASE_URL = 'http://127.0.0.1:5000/api/nasa/'

const instance = axios.create({
    baseURL: NASA_URL,
    timeout: 5000
});

const local_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export default {
    getDailyImage: () => instance.get('planetary/apod?' + NASA_KEY).then((response) => {
        return response.data
    }),

    getAllImages: () => local_instance.get().then((response) => {
        return response.data
    })
}