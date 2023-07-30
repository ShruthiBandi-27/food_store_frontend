import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from './FoodService';
import StarRating from './StarRating';
import Tags from './Tags';
import "./FoodPage.css"
import { useCart } from '../hooks/useCart';
import NotFound from './NotFound';

const FoodPage = () => {
    const [food, setFood] = useState({});
    const {id} = useParams();
    const {addToCart} = useCart();
    const nav = useNavigate();

    const handleAddToCart = () => {
        addToCart(food);
        nav("/cart");
    }

    useEffect(() => {
        getById(id).then(setFood)
    },[id]);

  return (
   <>
    {!food ? (
        <NotFound message="Food Not Found!" linkText="Go to HomePage"/>
    ) : (
        <div className="food_container">
        <img className="food_image"
         src={`${food.imageUrl}`}
         alt={food.name}
        />
        <div className="details">
            <div className="food_header">
                <span className="name">{food.name}</span>
            </div>
            <div className="rating">
                <StarRating stars={food.stars} size={25}/>
            </div>
            <div className="food_origins">
                {
                    food.origins?.map(origin => <span key={origin}>{origin}</span>)
                }
            </div>
            <div className="tags">
                {
                    food.tags && (
                        <Tags tags={food.tags.map(tag => ({name :tag}))}
                            forFoodPage={true}
                        />
                    )
                }
            </div>
            <div className="food_cook_time">
             <span>
                Time to cook about <strong>{food.cookTime}</strong> mins
             </span>
            </div>
            <div className="food_price">
              <span>Rs. {food.price}</span>
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>) }
   </>
  )
}

export default FoodPage