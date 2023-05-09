import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        try{
            const {data} = axios.post('/users/signup', credentials);
            return data;
        } catch (error) {
            return error.message;
        }
    }
);

export default register;