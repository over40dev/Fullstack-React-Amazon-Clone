import './Header.css';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link, useHistory} from 'react-router-dom';
import {useStateValue} from '../State/StateProvider';
import {auth} from '../config/firebase';

function Header() {

  // programatically change URL
  const history = useHistory();

  const [{basket, user}] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push('/login');
    }
  };

  return ( 
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"/>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="headerBasketIcon"/>
          <div className="header__optionLineTwo header__basketCount">{basket?.length}</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
