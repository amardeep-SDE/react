import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { useState, useEffect } from "react";
import userContext from "./utils/userContext";

const About = lazy(() => import("./src/components/About"));
const AppLayout = () => {

  const [userName, setUserName] = useState("");

  useEffect(() => {

    const data = {
      name: "Amardeep ",
    };
    setUserName(data.name);
  }, [])

  return (
    <>
<userContext.Provider value= {{loggedInUser: userName , setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
      </userContext.Provider>
    </>
    
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
        element: (
          <Suspense fallback={"Loading........"}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(<RouterProvider router={appRouter} />);
