import { useContext } from 'react';
import {createContext, useReducer} from 'react'
import Product from '../components/Product';
import { ReduceCart } from './Reducer';
const Cart = createContext();
function Context({children}) {
    const [state, dispatch] = useReducer(ReduceCart, {
        products: Product,
        cart: [],
    })
    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;
export const CartState = () => {
    return useContext(Cart);
}