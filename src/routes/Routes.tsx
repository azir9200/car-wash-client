import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Register from "@/pages/Users/Register";
import Service from "@/pages/Services/Services";
import Login from "@/pages/Users/Login";
import ServiceDetails from "@/pages/Services/serviceDetails";
import BookingPage from "@/pages/Bookings/BookingPage";
import AllReviews from "@/components/ShareHome/AllReviews";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import CheckOutPage from "@/pages/Payment/CheckOutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "review",
        element: <AllReviews />,
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
        path: "bookings/:id",
        element: <BookingPage />,
      },
      {
        path: "/order/create",
        element: <CheckOutPage />,
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
