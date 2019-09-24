import axios from 'axios';
//In keys.js is unique keys to different REST API. Most of them are for free, so apply for them.
import keys from './keys';
import headers from './headers';

var authToken = null;

const NASA_URL = 'https://api.nasa.gov/';
const NASA_KEY = keys.key;
const BASE_URL_TODO = 'http://127.0.0.1:5000/api/';
const BASE_URL_NASA = 'http://127.0.0.1:8080/';

const nasa_instance = axios.create({
    baseURL: NASA_URL,
    timeout: 5000
});

const python_instance = axios.create({
    baseURL: BASE_URL_TODO,
    timeout: 5000
});

const space_microservice_instance = axios.create({
    baseURL: BASE_URL_NASA,
    timeout: 5000
});

space_microservice_instance.interceptors.request.use(request => {
    if (authToken !== null) {
        request.headers['Authorization'] = authToken;
    } 
    return request;
})

space_microservice_instance.interceptors.response.use(response => {
    return response;
})

function createImageObject(image) {
    var imageObject = {  
          date: image.date,
          explanation: image.explanation,
          media_type: image.media_type,
          service_version: image.service_version,
          title: image.title,
          url: image.url,
          hdurl: image.hdurl,
          copyright: image.copyright
    }

    return imageObject;
  }

function createTodoObject(todo) {
    var todoObject = {
        label: todo.label,
        description: todo.description
    }

    return todoObject;
}

export default {
    authToken: (token) => {
        authToken = token;
    },

    getDailyImage: () => nasa_instance.get('planetary/apod?' + NASA_KEY).then((response) => {
        return response.data;
    }),

    getAllImages: () => space_microservice_instance.get('iotd/', {headers}).then((response) => {

        return response.data;
    }),

    storeImage(image) {
        var imageToPost = createImageObject(image);
        if (authToken === null){
            var promise = new Promise(function(resolve, reject) {
                resolve("Not logged in");
            })
            return promise;
        } else {
            return space_microservice_instance.post('iotd/store/', imageToPost, {headers})
        }
    },

    getTodos: () => python_instance.get('todo/').then((response) => {
        return response.data;
    }),

    addTodo(todo) {
        var postTodo = createTodoObject(todo);
        return python_instance.post('todo/add', postTodo);
    },

    getMarsWeather: () => nasa_instance.get('insight_weather/?' + NASA_KEY + "&feedtype=json&ver=1.0").then((response) => {
        return response.data;
    }),

    getGeoStorms(start, stop){
        return nasa_instance.get('DONKI/GST?startDate=' + start + '&endDate=' + stop + '&' + NASA_KEY);   
    },

    getCsrfToken(credentials) {
        return space_microservice_instance.post("login", credentials, {headers});
    },

    addUser(data) {
        return space_microservice_instance.post("login/adduser", data, {headers});
    }
}