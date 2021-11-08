import { useReducer } from "react";
import Context from "./Context";
import React from "react";
import { AddToCart, RemoveCartItem, AddToWish, RemoveFromWish, LoggedIn } from "./Types";
import { ReduceCart } from "./Reducer";

function CartState({ children }) {
  const initialState = {
    cartItem: [],
    wishItem: [],
    login: false,
  };
  const [state, dispatch] = useReducer(ReduceCart, initialState);
  const addCart = (item) => {
    dispatch({ type: AddToCart, payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: RemoveCartItem, payload: id });
  };
  const addWish = (prod) => {
    dispatch({ type: AddToWish, payload: prod });
  };
  const removeWish = (id) => {
    dispatch({ type: RemoveFromWish, payload: id });
  };
  const signedIn = (e) => {
    dispatch({type: LoggedIn, payload: e})
  }
  return (
    <Context.Provider
      value={{
        cartItem: state.cartItem,
        wishItem: state.wishItem,
        login: state.login,
        signedIn,
        addCart,
        addWish,
        removeWish,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default CartState;
