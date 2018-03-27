import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lab-72-menu.firebaseio.com'
});

export default instance;