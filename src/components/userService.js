import axios from "axios";
import {API} from '../global.js';

export const getUser = () => 
localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null

export const login = async (email, password) => {
    const {data} = await axios.post(`${API}/api/users/login`, {email, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const register = async registerData => {
    const { data } = await axios.post(`${API}/api/users/register`, registerData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  };

export const logout = () => {
    localStorage.removeItem('user');
}
 