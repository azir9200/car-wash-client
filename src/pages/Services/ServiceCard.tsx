const ServiceCard = (service: any, onDetailsClick) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-bold text-left">{service.service.name}</h3>
        <p className="text-gray-600 text-left">{service.service.description}</p>
        <p className="font-semibold text-left">
          Price: ${service.service.price}
        </p>
        <p className="font-semibold text-left">
          Duration: {service.service.duration}
        </p>

        <button
          className=" bg-slate-500 w-full rounded-box"
          onClick={onDetailsClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
