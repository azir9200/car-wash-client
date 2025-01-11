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
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: </div>;
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Registration successful!",
    showConfirmButton: false,
    timer: 1500,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBookService = (service: any) => {
    dispatch(addBooking(service));
    // Show success message
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Service added to your booking successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className=" mx-auto ">
      <div className="lg:flex justify-between bg-slate-200">
        <div className="lg:w-2/5 bg-slate-250">
          <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
          <p>{service.description}</p>
          <p className="font-semibold">Duration: {service.duration}</p>
          <p className="text-gray-600 mb-6">Price: ${service.price}</p>
        </div>
        <div className="lg:w-3/5 ">
          <img
            src={service.image}
            alt={service.name}
            className="lg:w-full md:w-50% lg:h-80 md:52 sm:h-44 object-cover rounded-md mb-4"
          />
        </div>
      </div>

      <button
        onClick={() => {
          handleBookService(service);
        }}
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300 shadow-md hover:shadow-lg"
      >
        Book this Service
      </button>
    </div>
  );
};

export default ServiceDetails;
