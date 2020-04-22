import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {auth} from '../../firebase/firebase.util';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = ({ currentUser, cartHidden }) => {
  console.log(cartHidden);
  console.log('cart hidden');
  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin-and-signup">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {
        cartHidden ? 
          null : 
          (<CartDropdown />)
      }
      
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  cartHidden: selectCartHidden(state)
}); 

export default connect(mapStateToProps)(Header);
