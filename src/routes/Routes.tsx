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
// import CheckOutPage from "@/pages/Payment/CheckOutPage";
import ContactPage from "@/pages/Contact/Contact";
import About from "@/pages/About/About";
import PaymentFailed from "@/pages/PaymentFailed/PaymentFailed";
import ConfirmationSuccess from "@/pages/ConfimationSuccess/ConfirmationSuccess";
import Dashboard from "@/Layout/Dashboard";
import Review from "@/components/reviews/ReviewCard";
import Reviews from "@/components/ShareHome/Reviews";
import Footer from "@/components/Footer/Footer";

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
      // {
      //   path: "/order/create",
      //   element: <CheckOutPage />,
      // },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "payment/failed",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "payment/success",
        element: <ConfirmationSuccess />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Footer></Footer>,
      },
    ],
  },
]);
