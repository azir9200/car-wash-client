import { useState } from "react";
import { useGetAllServiceQuery } from "@/redux/Api/serviceApi";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const {
    data: services,
    isLoading,
    isError,
  } = useGetAllServiceQuery(undefined);
  const [showAll, setShowAll] = useState(false); // Toggle state for showing all services
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();

  if (isLoading) return <p>Loading services...</p>;
  if (isError) return <p>Error loading services.</p>;

  // Filter and sort services
  const filteredServices = services?.data
    .filter((service: any) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Determine the number of services to show
  const servicesToShow = showAll
    ? filteredServices
    : filteredServices?.slice(0, 10);

  return (
    <div className="mx-auto">
      <h1 className="text-4xl font-bold mb-6">All Car Wash Services</h1>

      {/* Search and Sort Section */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search services..."
          className="input input-bordered w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesToShow?.map((service: any) => (
          <ServiceCard
            key={service._id}
            service={service}
            onDetailsClick={() => navigate(`/services/${service._id}`)}
          />
        ))}
      </div>

      {/* Show All Button */}
      <button
        className="bg-slate-400 mt-4 px-6 py-2 rounded-r-full rounded-bl-sm"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "See More Services"}
      </button>
    </div>
  );
};

export default Services;
