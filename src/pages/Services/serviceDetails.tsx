// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
// import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";

// const ServiceDetails = () => {
//   const { id } = useParams<{ id: string }>();

//   // Fetching service details and available slots
//   const {
//     data: serviceResponse,
//     error,
//     isLoading,
//   } = useGetServiceDetailsQuery(id || "");
//   const { data: slotsResponse } = useGetAvailableSlotQuery(
//     `/api/slots/available/${id}`
//   );

//   // Extract service data
//   const service = serviceResponse?.data;
//   const availableSlots = slotsResponse?.data || [];

//   // Slot selection state
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

//   // Reset slot selection when service changes
//   useEffect(() => {
//     setSelectedSlot(null);
//   }, [service]);

//   // Loading and error handling
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Handle slot selection
//   const handleSlotSelection = (slot: string) => {
//     setSelectedSlot(slot);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="lg:flex justify-between">
//         {/* Service details section */}
//         <div className="w-2/5">
//           <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
//           <p>{service.description}</p>
//           <p className="font-semibold">Duration: azir {service.duration}</p>
//           <p className="text-gray-600 mb-6">Price: ${service.price}</p>
//         </div>

//         {/* Service image */}
//         <div>
//           <img
//             src={service.image}
//             alt={service.name}
//             className="lg:w-full lg:h-80 object-cover rounded-md mb-4"
//           />
//         </div>
//       </div>

//       {/* Available time slots */}
//       <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         {availableSlots.map(
//           (
//             slot: { _id: string; time: string; booked: boolean },
//             idx: number
//           ) => (
//             <button
//               key={idx}
//               className={`py-2 px-4 rounded-lg ${
//                 slot.booked ? "bg-gray-300 cursor-not-allowed" : "bg-green-500"
//               } ${
//                 selectedSlot === slot.time ? "border-2 border-blue-600" : ""
//               }`}
//               onClick={() => handleSlotSelection(slot.time)}
//               disabled={slot.booked}
//             >
//               {slot.time}
//             </button>
//           )
//         )}
//       </div>

//       {/* Display selected slot and booking link */}
//       {selectedSlot && (
//         <div className="mt-6">
//           <h3 className="text-lg">Selected Slot: {selectedSlot}</h3>
//           <Link
//             to={`/booking/${id}?slot=${selectedSlot}`}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Book This Service
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceDetails;

import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { useParams } from "react-router-dom";
import SlotsList from "../Slot/SlotsLis";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch service details
  const {
    data: serviceResponse,
    error,
    isLoading,
  } = useGetServiceDetailsQuery(id || "");

  // Fetch available slots using corrected path
  const { data: slotsResponse } = useGetAvailableSlotQuery(`${id}`);

  const service = serviceResponse?.data;
  const availableSlots = slotsResponse?.data || [];
  console.log("data,azi", availableSlots);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=" mx-auto ">
      <div className="lg:flex justify-between bg-slate-200">
        <div className="lg:w-2/5 bg-slate-250">
          <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
          <p>{service.description}</p>
          <p className="font-semibold">Duration: {service.duration}</p>
          <p className="text-gray-600 mb-6">Price: ${service.price}</p>
        </div>
        <div className="lg:w-3/5 ">
          <img
            src={service.image}
            alt={service.name}
            className="lg:w- lg:h-80 object-cover rounded-md mb-4"
          />
        </div>
      </div>
      <h2 className="text-2xl  font-bold mb-4">
        Available Time Slots
      </h2>
      <SlotsList availableSlots={availableSlots} serviceId={id} />
    </div>
  );
};

export default ServiceDetails;
