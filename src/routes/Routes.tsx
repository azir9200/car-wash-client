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
import ContactPage from "@/pages/Contact/Contact";
import About from "@/pages/About/About";
import PaymentFailed from "@/pages/Payment/PaymentFailed";
import Dashboard from "@/Layout/Dashboard";
import UserInfo from "@/DashboardItem/UserInfo/UserInfo";
import Cart from "@/pages/Bookings/Cart";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";
import CreateService from "@/DashboardItem/CreateService/CreateService";
import EditService from "@/DashboardItem/EditService/EditService";
import ServiceList from "@/DashboardItem/EditService/ServiceList";
import DeleteService from "@/DashboardItem/DeleteService/DeleteService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allReviews",
        element: <AllReviews />,
      },
      {
        path: "services",
        element: <Service />,
      },
      // {
      //   path: "services",
      //   element: (
      //     <ProtectedRoute>
      //       <Service />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "bookings/:id",
        element: <BookingPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "payment/failed",
        element: <PaymentFailed />,
      },
      {
        path: "paymentSuccess",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard />

      // <ProtectedRoute>
      //   <Dashboard />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <UserInfo />,
      },
      {
        path: "create",
        element: <CreateService />,
      },
      {
        path: "serviceList",
        element: <ServiceList />,
      },
      {
        path: "edit/:id",
        element: <EditService />,
      },
      {
        path: "delete/:id",
        element: <DeleteService />,
      },
    ],
  },
]);
