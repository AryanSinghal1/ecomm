import { AddToCart, RemoveCartItem, AddToWish, RemoveFromWish ,LoggedIn} from "./Types";
export const ReduceCart = (state, action) => {
  switch (action.type) {
    case AddToCart:
      return { ...state, cartItem: [...state.cartItem, action.payload] };
    case RemoveCartItem:
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
      };
    case AddToWish:
      return { ...state, wishItem: [...state.wishItem, action.payload] };
    case RemoveFromWish:
      return {
        ...state,
        wishItem: state.wishItem.filter((prod) => prod.id !== action.payload),
      };
      case LoggedIn:
        return {
          ...state,
          login: state.login=true
        };
    default:
      return state;
  }
};
