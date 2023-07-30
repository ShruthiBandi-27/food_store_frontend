import axios from "axios";
import {API} from '../global.js';

export const getAll = async () => {
    const {data} = await axios.get(`${API}/api/foods`);
    return data;
}

export const search = async searchTerm => {
    const {data} = await axios.get(`${API}/api/foods/search/` + searchTerm);
    return data;
}

export const getAllTags = async () => {
    const {data} = await axios.get(`${API}/api/foods/tags`);
    return data;
}


export const getAllByTag = async tag => {
    if (tag === 'All') return getAll();
    const {data} = await axios.get(`${API}/api/foods/tag/` + tag);
    return data;
}

export const getById = async foodId =>  {
    const {data} = await axios.get(`${API}/api/foods/` + foodId);
    return data;
}
