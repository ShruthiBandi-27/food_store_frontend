import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Search.css";

const Search = () => {
    const [term, setTerm] = useState('');
    const nav = useNavigate();
    const {searchTerm} = useParams();
    
    useEffect(() => {
      setTerm(searchTerm ?? '');
    }, [searchTerm])
  
    const search = async () => {
        term ? nav('/search/' + term) : nav('/');
    }

  return (
    <div className="search_container">
        <input
         type="text"
         placeholder="Search Food!"
         onChange={e => setTerm(e.target.value)}
         onKeyUp={e => e.key === 'Enter' && search()}
         value={term}
        />
        <button onClick={search}>Search</button>
    </div>
  )
}

export default Search