import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-90ca7.firebaseio.com/'
});

export default instance;
