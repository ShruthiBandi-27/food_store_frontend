import React from 'react';
import { Link } from 'react-router-dom';
import './orderItemsList.css';

export default function OrderItemsList({ order }) {
  return (
    <table className="order_table">
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map(item => (
          <tr key={item.food.id}>
            <td>
              <Link to={`/food/${item.food.id}`}>
                <img src={item.food.imageUrl} />
              </Link>
            </td>
            <td>{item.food.name}</td>
            <td>
              <span>{item.food.price}</span>
            </td>
            <td>{item.quantity}</td>
            <td>
              <span>{item.price}</span>
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
            <span>{order.totalPrice}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}