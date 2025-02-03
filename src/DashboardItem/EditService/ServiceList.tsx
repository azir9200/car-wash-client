/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllServiceQuery } from "@/redux/Api/serviceApi";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  // Fetch all services
  const { data } = useGetAllServiceQuery(undefined);
  const services = data?.data;
  const navigate = useNavigate();

  // // Handle loading and error states
  // if (isLoading) {
  //   return (
  //     <p className="text-center text-xl font-semibold">Loading services...</p>
  //   );
  // }

  // if (isError || !services) {
  //   return (
  //     <p className="text-center text-xl text-red-500">
  //       Failed to load services.
  //     </p>
  //   );
  // }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="font-bold text-3xl text-gray-800 mb-6 text-center">
        Service List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white uppercase text-sm sticky top-0">
            <tr>
              <th className="p-4 text-left">Service Name</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service: any) => (
              <tr
                key={service?._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-4 text-gray-700 text-lg">{service?.name}</td>
                <td className="p-4 flex justify-center gap-4">
                  <button
                    className="bg-yellow-400 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition"
                    onClick={() => navigate(`/dashboard/edit/${service?._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition"
                    onClick={() => navigate(`/dashboard/delete/${service._id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceList;
