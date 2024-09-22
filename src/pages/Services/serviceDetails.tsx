
import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: serviceResponse,
    error,
    isLoading,
  } = useGetServiceDetailsQuery(id || "");
  const service = serviceResponse?.data;

  const { data: slotsResponse } = useGetAvailableSlotQuery(undefined); //
  const availableSlots = slotsResponse?.data || [];

  console.log("object,slot", availableSlots);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    // Reset selected slot if service changes
    setSelectedSlot(null);
  }, [service]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="lg:flex justify-between">
        <div className="w-2/5">
          <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
          <p>{service.description}</p>
          <p className="font-semibold">Duration: {service.duration}</p>
          <p className="text-gray-600 mb-6">Price: ${service.price}</p>
        </div>
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="lg:w-full lg:h-80 object-cover rounded-md mb-4"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>
     <div className="grid grid-cols-3 gap-4 mb-4">
        {availableSlots.map(
          (
            slot: { _id: string; time: string; booked: boolean },
            idx: number
          ) => (
            <button
              key={idx}
              className={`py-2 px-4 rounded-lg ${
                slot.booked ? "bg-gray-300 cursor-not-allowed" : "bg-green-500"
              } ${
                selectedSlot === slot.time ? "border-2 border-blue-600" : ""
              }`}
              onClick={() => handleSlotSelection(slot.time)}
              disabled={slot.booked}
            >
              {slot.time}{" "}
              {/* Render the time or any specific property you want */}
            </button>
          )
        )}
      </div>
      {selectedSlot && (
        <div className="mt-6">
          <h3 className="text-lg">Selected Slot: {selectedSlot}</h3>
          <Link
            to={`/booking/${id}?slot=${selectedSlot}`} // Pass selected slot to booking page
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Book This Service
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
