import React from "react";
import ReactDOM from "react-dom/client";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="bg-teal-50 m-0 p-0 ">
        <PageHeader />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
