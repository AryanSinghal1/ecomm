import React from "react";
import CartProducts from "./CartProducts";
import NavBar from "./NavBar";
import "./MyCart.css";
import { useContext } from "react";
import Context from "../Context/Context";
import EmptyCart from "./EmptyCart";
function Mycart() {
  const { cartItem } = useContext(Context);
  // localStorage.setItem('cartItem', JSON.stringify(cartItem));
  // const cart = localStorage.getItem("cartItem");
  // const cartItem = JSON.parse(cart);
  console.log(cartItem);
  return (
    <div className="shoppingCart">
      <NavBar />
      <h2 style={{ color: "white", textAlign: "center" }}>
        Welcome to your Cart
      </h2>
      <div className="Products">
        {cartItem.length === 0 ? (
          <EmptyCart
          message='Cart Is Empty'
          />
        ) : (
          cartItem.map((e) => {
            return (
              <CartProducts
                image={e.image}
                heading={e.title}
                about={e.description}
                price={e.price}
                id={e.id}
              />
            );
          })
        )}
      </div>
      {cartItem.length === 0 ? (
        ""
      ) : (
        <div style={{ textAlign: "center" }}>
          <span className="subtotal" style={{ color: "white" }}>
            Your total is:&nbsp;&nbsp;
          </span>
          <span style={{ color: "white" }}>
            {cartItem.reduce((amount, item) => item.price + amount, 0)}
          </span>
        </div>
      )}
    </div>
  );
}

export default Mycart;
