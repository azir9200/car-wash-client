/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
import { addBooking } from "@/redux/features/bookingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const {
    data: serviceResponse,
    error,
    isLoading,
  } = useGetServiceDetailsQuery(id || "");

  const service = serviceResponse?.data;

  if (isLoading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Error loading service details.
      </div>
    );
  }

  const handleBookService = (service: any) => {
    dispatch(addBooking(service));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Service added to your booking successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row justify-between bg-slate-200 p-6 rounded-lg shadow-md">
        <div className="lg:w-2/5 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {service.name}
          </h1>
          <p className="text-gray-700">{service.description}</p>
          <p className="font-semibold">Duration: {service.duration}</p>
          <p className="text-gray-600 text-lg font-medium">
            Price: ${service.price}
          </p>
        </div>
        <div className="lg:w-3/5 flex justify-center">
          <img
            src={service.image}
            alt={service.name}
            className="w-full sm:w-3/4 md:w-2/3 lg:h-80 object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleBookService(service)}
          className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-300 shadow-md hover:shadow-lg"
        >
          Book this Service
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
