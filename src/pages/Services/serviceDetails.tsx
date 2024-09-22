import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data: service, error, isLoading } = useGetServiceDetailsQuery(id!);
  console.log("object", service);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="font-semibold mb-2">Price: ${service.price}</p>
      <p className="font-semibold">Duration: {service.duration}</p>
    </div>
  );
};

export default ServiceDetails;
