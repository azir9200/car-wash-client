import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import { addBooking } from "@/redux/features/bookingSlice";
import { useCreateBookingMutation } from "@/redux/Api/bookingApi";
import { useAppSelector } from "@/redux/hooks";

interface BookingPageProps {
  serviceName: string;
  selectedSlot: string;
}

const BookingPage: React.FC<BookingPageProps> = ({
  serviceName,
  selectedSlot,
}) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [payNowRedirectUrl, setPayNowRedirectUrl] = useState<string | null>(
    null
  );

  console.log("service name", serviceName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookings = useAppSelector((store) => store.bookings.bookingArray);
  console.log("booking page", bookings);
  const user = useAppSelector((state: RootState) => state.user);
  console.log("user Booking", user);
  const [createBooking] = useCreateBookingMutation();

  const handlePayNow = async () => {
    try {
      const bookingDetails = {
        serviceId: serviceName,
        slotId: selectedSlot,
        vehicleType: "Car", // You can fetch or prompt this
        vehicleBrand: "Toyota", // Example data
        vehicleModel: "Corolla", // Example data
        date: new Date().toISOString().split("T")[0],
      };

      const response = await createBooking(bookingDetails).unwrap();
      if (response.success) {
        // Redirect to AAMARPAY for payment
        const aamarpayUrl = `https://sandbox.aamarpay.com/payment/request?payment_id=${response.data._id}&amount=${response.data.amount}&currency=BDT&success_url=${window.location.origin}/success`;
        setPayNowRedirectUrl(aamarpayUrl);

        // Dispatch booking to Redux
        dispatch(addBooking(response.data));
        // dispatch(setBookingStatus("success"));

        // Redirect to AAMARPAY
        window.location.href = aamarpayUrl;
      }
    } catch (error) {
      // dispatch(setBookingStatus("failed"));
      console.error("Error during booking or payment:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {/* Left Side: Service and Slot Details */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Selected Service</h2>
        <p className="mb-2">
          <strong>Service Name:</strong> {serviceName}
        </p>
        <p className="mb-2">
          <strong>Time Slot:</strong> {selectedSlot}
        </p>
      </div>

      {/* Right Side: Form for User Information */}
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">User Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Selected Time Slot:
            </label>
            <input
              type="text"
              value={selectedSlot}
              disabled
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>

          {/* Pay Now Button */}
          <div className="mt-6">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              onClick={handlePayNow}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
