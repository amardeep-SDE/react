import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// const Header = () => {
//   return (
//     <div className="header-container">
//       <div className="logo">
//         <img src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI=" alt="logo" />
//       </div>
//       <div className="nav-items">
//         <ul className="nav-list">
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// const RestaurantCard = (props) => {
// const {name, cuisine, rating, time} = props;
//   return (
//     <div className="res-card">
//       <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" alt="logo" />
//       <h3>{name}</h3>
//       <h4>{cuisine}</h4>
//       <h4>{rating}</h4>
//       <h4>{time}</h4>
//     </div>
//   )
// }

// const Body = () =>{
//   return (
//     <div className="body-container">
//     <div className="search">Search</div>
//     <div className="res-container">
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="10min | 400₹"/>
//       <RestaurantCard name= "Biryani Express" cuisine="Biryani, Fast Food, Snacks" rating="4.1⭐" time="20min | 400₹"/>
//       <RestaurantCard name="Meghna Food" cuisine="Biryani, Fast Food, Snacks" rating="4.3⭐" time="30min | 400₹"/>
//       <RestaurantCard name="Manhor Dairy" cuisine="Biryani, Fast Food, Snacks" rating="4.7⭐" time="40min | 400₹"/>
//       <RestaurantCard name= "Biryani Express" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="50min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.4⭐" time="60min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="70min | 400₹"/>
//       <RestaurantCard name= "Biryani Express" cuisine="Biryani, Fast Food, Snacks" rating="4.9⭐" time="80min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="90min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>
//       <RestaurantCard name= "Biryani Express" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>
//       <RestaurantCard name= "Biryani Express" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>
//       <RestaurantCard name="Domino's Pizza" cuisine="Biryani, Fast Food, Snacks" rating="4.2⭐" time="30min | 400₹"/>

//     </div>
//     </div>
//   )
// }
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(<RouterProvider router={appRouter} />);
