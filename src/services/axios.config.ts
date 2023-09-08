import axios from 'axios';
import { MOVIE_API_URL } from '../common/constants';

export const API_KEY = "3fec3008d1ad814b4a3a1bf7df5a8880";

const instance = axios.create({
    baseURL: MOVIE_API_URL,
    params: {
        api_key: API_KEY,
    }
});

export default instance;