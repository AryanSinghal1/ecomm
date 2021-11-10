import { useReducer } from "react";
import Context from "./Context";
import React from "react";
import { AddToCart, RemoveCartItem, AddToWish, RemoveFromWish, LoggedIn, IncQty, DecQty } from "./Types";
import { ReduceCart } from "./Reducer";

function CartState({ children }) {
  const initialState = {
    cartItem: [],
    wishItem: [],
    login: false,
    qty: 1,
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
  const IncVal = (e) => {
    dispatch({type: IncQty, payload: e})
  }
  const DecVal = (e) => {
    dispatch({type: DecQty, payload: e})
  }
  return (
    <Context.Provider
      value={{
        cartItem: state.cartItem,
        wishItem: state.wishItem,
        login: state.login,
        qty: state.qty,
        IncVal,
        DecVal,
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
