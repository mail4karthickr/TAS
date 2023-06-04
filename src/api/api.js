import axios from "axios";
import mockAxios from './mock/api-mock';

const axiosInstance = ({ method }) => {
    const api = axios.create({
        baseURL: 'https://www.example.com',
        timeout: 5000,
        method: method
    });
    if (process.env.NODE_ENV === 'production') {
        console.log(`'process.env.NODE_ENV ${process.env.NODE_ENV}`)
        return api
    } else {
        console.log(`'process.env.NODE_ENV ${process.env.NODE_ENV}`)
        mockAxios(api)
        return api
    }
}

export default axiosInstance;
