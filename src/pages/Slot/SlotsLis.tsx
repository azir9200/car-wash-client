import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // For date selection
import "react-datepicker/dist/react-datepicker.css";

const SlotsList = ({ serviceId }: { serviceId: string }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null); // Track selected slot
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Default to current date
  const formattedDate = selectedDate?.toISOString().split("T")[0];

  const {
    data: slotsResponse,
    isLoading,
    error,
  } = useGetAvailableSlotQuery(serviceId, formattedDate);

  const availableSlots = slotsResponse?.data || [];

  useEffect(() => {
    // Reset selected slot when the date changes
    setSelectedSlot(null);
  }, [selectedDate]);

  if (isLoading) {
    return <div>Loading slots...</div>;
  }

  if (error) {
    return <div>Error loading slots.</div>;
  }

  const handleSlotClick = (slotId: string) => {
    if (!availableSlots.find((slot: any) => slot._id === slotId)?.booked) {
      setSelectedSlot(slotId); // Set selected slot if not booked
    }
  };

  return (
    <div>
      <div className="mb-4">
        {/* DatePicker for selecting the date */}
        <div className="mb-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border border-gray-300 rounded p-2"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot: any) => (
              <button
                key={slot._id}
                onClick={() => handleSlotClick(slot._id)}
                className={`py-2 px-4 rounded-lg ${
                  slot.booked
                    ? "bg-gray-300 cursor-not-allowed"
                    : selectedSlot === slot._id
                    ? "bg-blue-500 text-white"
                    : "bg-green-500"
                }`}
                disabled={slot.booked}
              >
                {`${slot.startTime} - ${slot.endTime}`}
              </button>
            ))
          ) : (
            <div>No available slots for this service.</div>
          )}
        </div>

        {/* Book This Service Button */}
        {selectedSlot && (
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => alert(`Booking slot ID: ${selectedSlot}`)} // Replace with actual booking logic
            >
              Book This Service
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotsList;
