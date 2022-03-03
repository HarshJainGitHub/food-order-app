import React, { useEffect, useReducer } from 'react'
import CartContext from './cart-context'
 
const defaultCartState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action) => {
  if(action.type === 'ADD'){
    console.log("Action reducer",state,action);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const exisitingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if(exisitingCartItem){
      const updatedItem = {
        ...exisitingCartItem,
        amount: action.item.amount + exisitingCartItem.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    else{
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler = (item) => {
    console.log("Provider -> action",item);
    dispatchCartAction({type:'ADD', item:item});
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE', id:id});
  };

  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler ,
    removeItem: removeItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;