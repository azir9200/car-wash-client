/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteServiceMutation,
  useGetServiceDetailsQuery,
} from "@/redux/Api/serviceApi";
import { useParams, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import Swal from "sweetalert2";

const DeleteService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch service details by ID
  const {
    data: serviceResponse,
    error,
    isLoading: isFetching,
  } = useGetServiceDetailsQuery(id || "");
  const [deleteService, { isLoading }] = useDeleteServiceMutation();

  const service = serviceResponse?.data;

  // Show loading state
  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Loading service details..." />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Error: Unable to fetch service details.
        </p>
      </div>
    );
  }

  // Handle Delete
  const handleDelete = async () => {
    // Step 1: Show confirmation dialog
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "Only Admin can delete a Service!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // Step 2: Check if user confirmed the deletion
    if (result.isConfirmed) {
      try {
        // Step 3: Proceed with deletion
        await deleteService(id || "").unwrap();
        Swal.fire({
          icon: "success",
          title: "Service Deleted",
          text: "The service has been successfully deleted!",
        });
        navigate("/dashboard");
      } catch (err: any) {
        // Step 4: Handle errors
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            err?.data?.message ||
            "Failed to delete the service. Please try again.",
        });
      }
    } else {
      // Step 5: If canceled, show a message
      Swal.fire({
        icon: "info",
        title: "Cancelled",
        text: "Service deletion was cancelled.",
      });
    }
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 my-12">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-6">
        Delete Service
      </h2>

      <div className="flex flex-col lg:flex-row bg-slate-100 rounded-md overflow-hidden shadow-md">
        {/* Service Details */}
        <div className="lg:w-3/5 p-6">
          <h1 className="text-3xl font-semibold mb-4">{service.name}</h1>
          <p className="text-gray-700 mb-2">{service.description}</p>
          <p className="font-semibold">Duration: {service.duration} mins</p>
          <p className="text-gray-600 font-semibold mb-4">
            Price: ${service.price}
          </p>
        </div>

        {/* Service Image */}
        <div className="lg:w-2/5">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="px-6 py-2 bg-yellow-500 text-white text-lg rounded-md shadow hover:bg-yellow-600 transition duration-300"
          onClick={() => navigate(`/dashboard`)}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 bg-red-500 text-white text-lg rounded-md shadow hover:bg-red-600 transition duration-300"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete Service"}
        </button>
      </div>
    </div>
  );
};

export default DeleteService;
