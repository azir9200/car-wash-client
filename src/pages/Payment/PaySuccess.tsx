import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const sendBookingDataToBackend = async (bookingData) => {
  try {
    const response = await axios.post("/api/bookings", bookingData);
    console.log("Booking saved successfully:", response.data);
  } catch (error) {
    console.error("Error saving booking:", error);
  }
};

const PaymentSuccessPage = () => {
  const bookingData = useSelector((state) => state.booking);

  useEffect(() => {
    // Send booking data to backend once payment is successful
    sendBookingDataToBackend(bookingData);
  }, [bookingData]);

  return <div>Payment Successful! Booking confirmed.</div>;
};

export default PaymentSuccessPage;
