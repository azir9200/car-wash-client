// import React, { useState } from "react";

// interface Slot {
//   time: string;
//   status: "available" | "booked";
// }

// interface ServiceDetailsProps {
//   service: {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     duration: string;
//     slots: Slot[];
//   };
// }

// const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

//   const handleSlotSelection = (time: string) => {
//     setSelectedSlot(time);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
//       <p className="text-lg mb-4">{service.description}</p>
//       <p className="font-semibold">Price: ${service.price}</p>
//       <p className="font-semibold mb-6">Duration: {service.duration}</p>

//       <h2 className="text-2xl font-semibold mb-4">Available Time Slots</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {service.slots.map(slot => (
//           <button
//             key={slot.time}
//             className={`btn ${
//               slot.status === "booked" ? "btn-disabled" : "btn-primary"
//             }`}
//             disabled={slot.status === "booked"}
//             onClick={() => handleSlotSelection(slot.time)}
//           >
//             {slot.time}
//           </button>
//         ))}
//       </div>

//       {selectedSlot && (
//         <div className="mt-8">
//           <p className="text-lg">
//             Selected Slot: <span className="font-bold">{selectedSlot}</span>
//           </p>
//           <button className="btn btn-success mt-4">Book This Service</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceDetails;
