// import { useGetAllServiceQuery } from "@/redux/Api/serviceApi";
// import ServiceCard from "./ServiceCard";

// const Services = () => {
//   const { data: services } = useGetAllServiceQuery(undefined);
//   console.log("object", services);
//   return (
//     <div>
//       <h2>services page</h2>
//       <div className="container">
//         <h1 className="text-4xl font-bold my-10">All Products</h1>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
//           {services?.data.map((service: unknown) => (
//             <ServiceCard key={(service as any).id} service={service as any} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import { useState } from "react";
import { useGetAllServiceQuery } from "@/redux/Api/serviceApi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const {
    data: services,
    isLoading,
    isError,
  } = useGetAllServiceQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) return <p>Loading services...</p>;
  if (isError) return <p>Error loading services.</p>;

  const filteredServices = services?.data
    .filter((service: any) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className=" mx-auto p-8">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredServices.map((service: any) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
