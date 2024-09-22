/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import {
  bookSlot,
  setSelectedSlot,
  setSlots,
} from "@/redux/features/slotSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SlotsList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: slots, error, isLoading } = useGetAvailableSlotQuery(undefined);
  console.log("slot", slots);
  const selectedSlot = useSelector((state: any) => state.slots.selectedSlot);
  console.log("object  slot", selectedSlot);

  useEffect(() => {
    if (slots) {
      dispatch(setSlots(slots));
    }
  }, [slots, dispatch]);

  const handleSlotClick = (slotId: string) => {
    dispatch(setSelectedSlot(slotId));
  };

  const handleBooking = () => {
    if (selectedSlot) {
      dispatch(bookSlot(selectedSlot)); // Book the selected slot
      alert(`Slot ${selectedSlot} booked successfully!`);
      dispatch(setSelectedSlot(null)); // Reset selection after booking
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!slots || slots.length === 0) return <div>No available slots found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Available Slots</h1>
      {/* <div className="grid grid-cols-3 gap-4 mb-6">
        {slots.map((slot: any) => (
          <button
            key={slot._id}
            className={`p-2 border rounded-lg ${
              selectedSlot === slot._id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } hover:bg-blue-400 transition`}
            onClick={() => handleSlotClick(slot._id)}
            disabled={slot.booked}
          >
            {slot.startTime} - {slot.endTime}
          </button>
        ))}
      </div> */}
      <button
        onClick={handleBooking}
        disabled={!selectedSlot}
        className={`w-full py-2 px-4 text-white rounded-lg ${
          selectedSlot ? "bg-green-500 hover:bg-green-600" : "bg-gray-400"
        }`}
      >
        {selectedSlot ? "Book This Slot" : "Select a Slot"}
      </button>
    </div>
  );
};

export default SlotsList;
