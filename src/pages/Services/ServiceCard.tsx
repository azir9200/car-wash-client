import { Link } from "react-router-dom";

interface ServiceProps {
  service: {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    image: string;
  };
}

const ServiceCard: React.FC<{ service: ServiceProps["service"] }> = ({
  service,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 transition-transform transform hover:scale-105">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Service Details */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
          <p className="font-semibold">Price: ${service.price}</p>
          <p className="font-semibold">Duration: {service.duration}</p>
        </div>

        {/* Service Image */}
        <div className="md:w-1/3 flex justify-end">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-32 object-cover rounded-md"
          />
        </div>
      </div>

      {/* View Details Button */}
      <Link to={`/services/${service._id}`}>
        <button className="mt-4 w-full bg-slate-500 text-white py-2 rounded-full hover:bg-slate-700 transition duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
