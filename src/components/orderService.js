import axios from 'axios';
import {API} from '../global.js';

export const createOrder = async order => {
  try {
    const { data } = axios.post(`${API}/api/orders/create`, order);
    return data;
  } catch (error) {}
};