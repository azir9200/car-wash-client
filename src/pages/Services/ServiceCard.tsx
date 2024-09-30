/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

const ServiceCard = (service: any) => {
  
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex ">
          <div>
            <h3 className="text-xl font-bold text-left">
              {service.service.name}
            </h3>
            <p className="text-gray-600 text-left">
              {service.service.description}
            </p>
            <p className="font-semibold text-left">
              Price: ${service.service.price}
            </p>
            <p className="font-semibold text-left">
              Duration: {service.service.duration}
            </p>
          </div>
          <div className="w-1/4 justify-end">
            <img
              src={service.service.image}
              className="w-full h-full rounded-tl-3xl text-end "
            />{" "}
          </div>
        </div>

        <button className=" bg-slate-500 w-full rounded-l-full">
          {" "}
          <Link to={`/services/${service.service._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
