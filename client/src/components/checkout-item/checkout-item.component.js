import React from "react";

import { connect } from 'react-redux';

import { removeItem, addItem } from '../../redux/cart/cart.actions';

import {CartActionTypes} from '../../redux/cart/cart.types';

import './checkout-item.styles.scss';

const CheckoutItem = ({item, removeItem, reduceQuantity, addItem}) => {
    const {name, price, quantity, imageUrl} = item;
return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => reduceQuantity(item)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => removeItem(item)}>&#10005;</div>
  </div>
);
}

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch({type: CartActionTypes.REMOVE_ITEM, payload: item}),
    reduceQuantity: (item) => dispatch({type: CartActionTypes.REDUCE_QUANTITY, payload: item}),
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
