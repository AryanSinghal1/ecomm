import { AddToCart, RemoveCartItem } from './Types';
export const ReduceCart = (state, action) => {
    switch (action.type) {
        case AddToCart:
            return { ...state, cartItem: [...state.cartItem, action.payload] };
        case RemoveCartItem:
            return { ...state, cartItem: state.cartItem.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
}