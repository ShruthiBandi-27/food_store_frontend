import React from 'react'
import "./CartPage.css";
import { useCart } from '../hooks/useCart';
import Title from './Title';
import { Link } from 'react-router-dom';
import "./CartPage.css"
import NotFound from './NotFound';

const CartPage = () => {
    const {cart, removeFromCart, changeQuantity} = useCart();
  return (
   <>
    <Title title="Cart Page" margin="1.5rem 0 0 2.5rem"/>
    {
        cart.items.length === 0 ? (
            <NotFound message="Cart is Empty!" linkText="Go To HomePage"/>
        ) : (
        <div className="cart_container">
            <ul className="cart_list">
                {
                    cart.items.map(item => (<li key={item.food.id}>
                        <div>
                            <img src={`${item.food.imageUrl}`} alt={item.food.name}/>
                        </div>
                        <div>
                            <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                        </div>
                        <div>
                            <select 
                              value={item.quantity} 
                              onChange={e => changeQuantity(item, Number(e.target.value))}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div>
                            <span>Rs. {item.price}</span>
                        </div>
                        <div>
                            <button className="remove_button" onClick={() => removeFromCart(item.food.id)}>Remove</button>
                        </div>
                    </li>))
                }
            </ul>
            <div className="checkout">
                <div>
                    <div className="foods_count">{cart.totalCount}</div>
                    <div className="total_price">
                        <span>Rs.{cart.totalPrice}</span>
                    </div>
                </div>
                <Link to="/checkout">Proceed To Checkout</Link>
            </div>
        </div>
        )
    }
   </>
  )
}

export default CartPage