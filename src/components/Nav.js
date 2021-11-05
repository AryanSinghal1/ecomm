import React from "react";
import "./Nav.css";
function Nav(props) {
  return (
    <>
      <a href="#top">{props.val}</a>
    </>
  );
}

export default Nav;
