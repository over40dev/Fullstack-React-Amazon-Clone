import React from 'react';
import {useStateValue} from '../State/StateProvider';
import './Product.css';

function Product({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
  console.log(basket); // TODO: why does dispatch fail (says not a function) when `basket` not imported as well (we don't need basket here)

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star ratings">
                ⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt={title}/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
