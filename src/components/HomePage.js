import React, { useEffect, useReducer } from 'react'
import { getAll, getAllByTag, getAllTags, search } from './FoodService';
import Thumbnails from './Thumbnails';
import { useParams } from 'react-router-dom';
import Search from './Search';
import Tags from './Tags';
import NotFound from './NotFound';

const initialState = {foods : [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return {...state, foods: action.payload};
        case 'TAGS_LOADED':
            return {...state, tags: action.payload};
        
        default:
            return state;
    }
}
export const HomePage = () => {
    const [state, dispatch ] = useReducer(reducer, initialState);
    const {foods, tags} = state;
    const {searchTerm, tag} = useParams();

    useEffect(() => {
        getAllTags().then(tags => dispatch({type:'TAGS_LOADED', payload : tags}))
        const loadedFoods = tag ? getAllByTag(tag) : searchTerm ?  search(searchTerm) : getAll();
        loadedFoods.then(foods => dispatch({type: 'FOODS_LOADED', payload: foods}))
    },[searchTerm, tag])

  return (
    <>
        <Search/>
        <Tags tags={tags}/>
        {
            foods.length === 0 && <NotFound linkText="Reset Search"/>
        }
        <Thumbnails foods={foods}/>
    </>
  )
}
