import './CheckoutProduct.css'
import React from 'react';
import { useStateValue } from '../State/StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
  
  const [{basket}, dispatch] = useStateValue();
  console.log(basket); // TODO: why does dispatch fail (says not a function) when `basket` not imported as well (we don't need basket here)

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    });
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title}/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star rating">⭐</span>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct;
