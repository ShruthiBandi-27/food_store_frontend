import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import "./Thumbnails.css"

const Thumbnails = ({foods}) => {
  return (
    <ul className="list">
        {
            foods.map(food => (
                <li key={food.id}>
                 <Link to={`/food/${food.id}`}>
                    <img
                      className="image"
                      src={`${food.imageUrl}`}  
                      alt={food.name}
                    />
                 
                 <div className="content">
                    <div className="name">{food.name}</div>
                    <div className="stars">
                        <StarRating stars={food.stars}/>
                    </div>
                    <div className="product_footer">
                        <div className="origins">
                            {
                                food.origins.map(origin => (
                                    <span key={origin}>{origin}</span>
                                ))
                            }
                        </div>
                        <div className="cook_time">
                            <span>⏱️</span>
                            {food.cookTime} mins
                        </div>
                    </div>
                    <div className="price">
                            RS.{food.price}
                    </div>
                 </div>
                 </Link>
                </li>
            ))
        }
    </ul>
  )
}

export default Thumbnails