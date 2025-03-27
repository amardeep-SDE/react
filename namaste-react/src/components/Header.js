import { useEffect, useState } from "react";
import { HEADER_IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // let btnName = "login"
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Header rendered");
  });
  

  return (
    <div className="flex justify-between bg-pink-200 m-2 shadow-md items-center ">
      <div className="w-24">
        <img src={HEADER_IMG_URL} alt="logo" />
      </div>
      <div className="nav-items mx-3">
        <ul className="flex p-4 gap-4">
          <li className="px-4">OnlineStatus : {onlineStatus ? "Online" : "Offline"}</li>
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
