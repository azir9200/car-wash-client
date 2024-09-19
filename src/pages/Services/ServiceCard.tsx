const ServiceCard = (service: any) => {
  console.log(" card1", service);
  console.log(" card2", service.service.name);
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-bold">{service.service.name}</h3>
        <p className="text-gray-600">{service.service.description}</p>
        <p className="font-semibold mt-4">Price: ${service.service.price}</p>
        <p className="font-semibold">Duration: {service.service.duration}</p>
        <button className="btn btn-primary mt-4">View Details</button>
      </div>
    </div>
  );
};

export default ServiceCard;
