import { useContext, useEffect, useState } from "react";
import { HEADER_IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // let btnName = "login"
  const onlineStatus = useOnlineStatus();

  const addItem = useSelector((state) => state.cart.item);

  useEffect(() => {
    console.log("Header rendered");
  });

  const { loggedInUser } = useContext(userContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-200 m-2 shadow-md items-center ">
      <div className="w-24">
        <img src={HEADER_IMG_URL} alt="logo" />
      </div>
      <div className="nav-items mx-3">
        <ul className="flex p-4 gap-4">
          <li className="px-4">
            OnlineStatus : {onlineStatus ? "Online" : "Offline"}
          </li>
          <li>
            <h4 className="text-xl">{loggedInUser}</h4>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart: {addItem.length}</Link>
          </li>
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
