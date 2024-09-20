// import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
// import { useParams } from "react-router-dom";

// const ServiceDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data } = useGetServiceDetailsQuery(id || "");
//   const serviceDetails = data;
//   console.log("details", serviceDetails);

//   return (
//     <div>
//       <h2> details </h2>
//     </div>
//   );
// };

// export default ServiceDetails;


// src/pages/ServiceDetails.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceDetails } from "../store/slices/serviceSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../store";

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>(); // Get serviceId from URL params
  const dispatch = useDispatch();
  const { service, loading, error } = useSelector((state: RootState) => state.service);

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    if (serviceId) {
      dispatch(fetchServiceDetails(serviceId));
    }
  }, [dispatch, serviceId]);

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      console.log(`Booking slot: ${selectedSlot}`);
      // Handle booking logic here
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!service) return <div>No service found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg mb-6">{service.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Available Slots</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {service.slots.map((slot: string, index: number) => (
          <button
            key={index}
            className={`p-2 border rounded-lg ${
              selectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-blue-400 transition`}
            onClick={() => handleSlotClick(slot)}
            disabled={slot.booked}
          >
            {slot.time}
          </button>
        ))}
      </div>

      <button
        onClick={handleBooking}
        disabled={!selectedSlot}
        className={`w-full py-2 px-4 text-white rounded-lg ${
          selectedSlot ? "bg-green-500 hover:bg-green-600" : "bg-gray-400"
        }`}
      >
        {selectedSlot ? "Book This Service" : "Select a Slot"}
      </button>
    </div>
  );
};

export default ServiceDetails;
