/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllServiceQuery } from "@/redux/Api/serviceApi";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  // Fetch all services
  const { data, isLoading, isError } = useGetAllServiceQuery(undefined);
  const services = data?.data;
  const navigate = useNavigate();

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading services...</p>;
  }

  if (isError || !services) {
    return <p>Failed to load services.</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-3xl">Service List</h2>
      <ul>
        {services.map((service: any) => (
          <div className="flex justify-between gap-8" key={service._id}>
            <p className="text-xl text-white f px-6 py-4 bg-slate-600 my-2 rounded-md ">
              {service.name}
            </p>
            <div className="">
              <button
                className="text-xl rounded-md bg-yellow-400 my-4 px-6 mr-6"
                onClick={() => navigate(`/dashboard/edit/${service._id}`)}
              >
                Edit
              </button>
              <button
                className="text-xl rounded-md bg-red-400 my-4 px-6"
                onClick={() => navigate(`/dashboard/delete/${service._id}`)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
