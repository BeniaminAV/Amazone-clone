import axios from 'axios';

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/e-clone-7e5df/us-central1/api' // THE API (cloud function) URL
});

export default instance;