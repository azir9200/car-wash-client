import { clearCart } from "@/redux/features/bookingSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export type Service = {
  _id: string;
  name: string;
  price: number;
  duration: number;
  image: string;
  description: string;
};

interface BookingDetailsProps {
  service: Service;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ service }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Handle Pay Now button click
  const handlePayment = () => {
    Swal.fire({
      title: "Proceed to Payment",
      text: `Are you sure you want to pay for ${service.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pay Now",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to checkout page
        navigate("/paymentSuccess");
      }
      dispatch(clearCart());
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full mx-auto">
      {/* Image Section */}
      <img
        src={service.image}
        alt={service.name}
        className="w-36 h-36 lg:w-52 lg:h-52 object-cover rounded-lg"
      />

      {/* Service Details Section */}
      <div className="flex-grow space-y-2 mx-6">
        <h3 className="text-2xl font-semibold text-gray-800 truncate">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Duration:</span> {service.duration}{" "}
          minutes
        </p>
        <p className="text-gray-900 text-lg font-bold">
          Price: ${service.price}
        </p>
      </div>

      {/* Action Button Section */}
      <div className="flex-shrink-0">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
