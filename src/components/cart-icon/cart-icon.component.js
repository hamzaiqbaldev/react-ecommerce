import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartQuantity } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    console.log('cart component called');
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <ShoppingBag className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
 
};

const mapStateToProps = (state) =>  { 
    return({
  itemCount: selectCartQuantity(state)
});
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
