import { setBookingDetails } from "@/redux/features/BookingsSlices";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Sample data to simulate selected service and slot
const selectedService = {
  name: "Premium Car Wash",
  description: "A complete exterior and interior car wash service.",
  price: 50, // Price in dollars or relevant currency
};

const selectedSlot = {
  startTime: "10:00 AM",
  endTime: "11:00 AM",
  date: "2024-09-28", // Auto-fill slot time
};

const BookingPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayNow = () => {
    const bookingData = {
      userName,
      userEmail,
      serviceName: selectedService.name,
      serviceDescription: selectedService.description,
      servicePrice: selectedService.price,
      slotStartTime: selectedSlot.startTime,
      slotEndTime: selectedSlot.endTime,
      slotDate: selectedSlot.date,
    };
    // Dispatch the booking details to Redux store
    dispatch(setBookingDetails(bookingData));

    // Log booking data to console
    console.log("Booking Info:", bookingData);
    // Payment flow toast notification
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Redirecting to AAMARPAY for payment...",
      showConfirmButton: false,
      timer: 1500,
    });

    // Simulate slot booking and payment flow
    setTimeout(() => {
      navigate(`/payment-success`);
    }, 2000);
  };

  // // Redirect user to AAMARPAY payment processing page
  // dispatch(
  //   setBookingDetails({
  //     userName,
  //     userEmail,
  //     serviceName: selectedService.name,
  //     serviceDescription: selectedService.description,
  //     servicePrice: selectedService.price,
  //     slotStartTime: selectedSlot.startTime,
  //     slotEndTime: selectedSlot.endTime,
  //     slotDate: selectedSlot.date,
  //   })
  // );
  // console.log("Booking Ingo", setBookingDetails);
  // // payment flow toast
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "Redirecting to AAMARPAY for payment...",
  //   showConfirmButton: false,
  //   timer: 1500,
  // });

  // Simulate slot booking and payment flow
  //   setTimeout(() => {
  //     // Mark slot as "booked"
  //     // Redirect to success page after payment
  //     navigate(`/payment-success`);
  //   }, 2000);
  // };

  return (
    <div className="flex flex-col md:flex-row justify-center p-8 gap-8">
      {/* Left Side: Service Details */}
      <div className="md:w-1/2 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{selectedService.name}</h2>
        <p className="text-gray-600 mb-2">{selectedService.description}</p>
        <p className="text-gray-800 font-semibold">
          Price: ${selectedService.price}
        </p>
        <p className="text-gray-600">
          Date: {selectedSlot.date} <br />
          Time: {selectedSlot.startTime} - {selectedSlot.endTime}
        </p>
      </div>

      {/* Right Side: User Info Form */}
      <div className="md:w-1/2 bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Enter Your Information</h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 p-2 border w-full rounded"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="mt-1 p-2 border w-full rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Selected Time Slot
            </label>
            <input
              id="time"
              type="text"
              value={`${selectedSlot.startTime} - ${selectedSlot.endTime}`}
              readOnly
              className="mt-1 p-2 border w-full rounded bg-gray-100"
            />
          </div>
        </form>

        {/* Pay Now Button    /booking/my-bookings/${id} */}
        <button
          onClick={handlePayNow}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
