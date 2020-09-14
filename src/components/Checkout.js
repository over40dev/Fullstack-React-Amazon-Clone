import './Checkout.css';
import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad banner"
          className="checkout__ad"/>

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          <CheckoutProduct
            key="12321341"
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/> 
            
          <CheckoutProduct
            key="12321341"
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/> 


        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>

      </div>
    </div>
  )
}

export default Checkout
