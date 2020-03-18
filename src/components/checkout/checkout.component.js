import React from "react";
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

import { connect } from 'react-redux';

import "./checkout.styles.scss";

const Checkout = ({cartTotal, cartItems}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
    }
    <div className="total">TOTAL: ${cartTotal}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
  </div>
);

const mapStateToProps = (state) => ({
    cartTotal: selectCartTotal(state),
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Checkout);
