import React, { useContext } from "react";
import NavBar from "../NavBar";
import "./Wishlist.css";
import Cards from "../Cards";
import Context from "../../Context/Context";
function Wishlist() {
  const { wishItem } = useContext(Context);
  return (
    <div className="shoppingCart">
      <NavBar />
      <h2 style={{ color: "white", margin: "2rem" }}>
        Welcome to your Wishlist
      </h2>
      <div className="items">
        {
          wishItem.map((e)=>{
            return <Cards 
            image={e.image}
            title={e.title}
            description={e.description}
            price={e.price}
            id={e.id}
            />
          })
        }
        {/* <Cards title="It is a card" description="This is Description" image="https://picsum.photos/seed/picsum/600/900" />
            <Cards title="It is a card" description="This is Description" />
            <Cards title="It is a card" description="This is Description" /> */}
      </div>
    </div>
  );
}

export default Wishlist;
