import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hockeycardfinder.azurewebsites.net/api/',
});

export default instance;