import { useState } from "react";
import { HEADER_IMG_URL } from "../../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // let btnName = "login"

  const newButton = () => {
    setBtnName(!btnName);
    console.log("button clicked");
  };
  console.log("header render");

  return (
    <div className="header-container">
      <div className="logo">
        <img src={HEADER_IMG_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={()=> setBtnName(newButton)}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
