import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import RestaurantCard from "./src/components/RestaurantCard";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const About = lazy(() => import("./src/components/About"));
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
