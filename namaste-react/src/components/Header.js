import { useEffect, useState } from "react";
import { HEADER_IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // let btnName = "login"

  useEffect(() => {
    console.log("Header rendered");
  });

  return (
    <div className="header-container">
      <div className="logo">
        <img src={HEADER_IMG_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
