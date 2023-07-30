import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useCart } from '../hooks/useCart'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
 
  const { user, logout} = useAuth();

  const {cart} = useCart()

  return (
    <header className="header">
        <div className="container">
            <Link to="/" className="logo">
                Yummy Tummy😋
            </Link>
            <nav>
                <ul>
                    {
                        user ? (
                            <li className="menu-container">
                                <Link to="/profile">{user.name}</Link>
                                <div className="menu">
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    <a onClick={logout}>Logout</a>
                                </div>
                            </li>
                        ) : (
                            <Link to="/login">Login</Link>
                        )
                    }
                    <li>
                        <Link to="/cart">
                            Cart
                            {cart.totalCount > 0 && <span className="cart_count">{cart.totalCount}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header