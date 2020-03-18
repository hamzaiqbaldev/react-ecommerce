export const addItemToCart = (cartItems, itemToadd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToadd.id);

  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem.id == itemToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...itemToadd, quantity: 1 }];
};

export const reduceItemQuantity = (cartItems, itemToReduce) => {
    const existingItem = cartItems.find(item => item.id == itemToReduce.id);
    console.log('existing item');
    console.log(existingItem);
    if(existingItem.quantity == 1) {
        return (cartItems.filter(item => item.id !== itemToReduce.id));
    }
    console.log('update quantity');
    return cartItems.map(item => 
        item.id == itemToReduce.id ? {...item, quantity: item.quantity - 1} : item
    );
} 
