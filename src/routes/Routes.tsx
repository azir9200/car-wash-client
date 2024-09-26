import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Register from "@/pages/Users/Register";
import Service from "@/pages/Services/Services";
import Login from "@/pages/Users/Login";
import ServiceDetails from "@/pages/Services/serviceDetails";
import BookingPage from "@/pages/Bookings/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path : "/bookings",
        element: <BookingPage />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
