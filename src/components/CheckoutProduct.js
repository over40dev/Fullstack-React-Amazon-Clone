import './CheckoutProduct.css'
import React from 'react';

function CheckoutProduct({id, image, title, price, rating}) {
  console.log(id);

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

        <button>Remove from Basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct;
