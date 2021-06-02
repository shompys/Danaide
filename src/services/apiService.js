import axios from 'axios';

const apiService = axios.create({

    baseURL: process.env.REACT_APP_API_URL

});

export default apiService;