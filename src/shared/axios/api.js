import axios from 'axios'
//In keys.js is unique keys to different REST API. Most of them are for free, so apply for them.
import keys from './keys';

const NASA_URL = 'https://api.nasa.gov/';
const NASA_KEY = keys.key;

const BASE_URL = 'http://127.0.0.1:5000/api/nasa/'

const instance = axios.create({
    baseURL: NASA_URL,
    timeout: 5000
});

const local_instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

function createJsonObject(image) {
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

export default {
    getDailyImage: () => instance.get('planetary/apod?' + NASA_KEY).then((response) => {
        return response.data
    }),

    getAllImages: () => local_instance.get().then((response) => {
        return response.data
    }),

    storeImage(image) {
        var imageToPost = createJsonObject(image);
        return local_instance.post('add', imageToPost)
    }
}