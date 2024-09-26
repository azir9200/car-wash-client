/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBookingMutation } from "@/redux/Api/bookingApi";
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { addBooking } from "@/redux/features/bookingSlice";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // For date selection
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SlotsList = ({ serviceId, serviceName, userId }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [vehicleType, setVehicleType] = useState<string>(""); // Track vehicle data
  const [vehicleBrand, setVehicleBrand] = useState<string>("");
  const [vehicleModel, setVehicleModel] = useState<string>("");
  const formattedDate = selectedDate?.toISOString().split("T")[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: slotsResponse,
    isLoading,
    error,
  } = useGetAvailableSlotQuery(serviceId, formattedDate);
  const [createBooking] = useCreateBookingMutation();

  const availableSlots = slotsResponse?.data || [];

  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDate]);

  if (isLoading) {
    return <div>Loading slots...</div>;
  }

  if (error) {
    return <div>Error loading slots.</div>;
  }

  const handleSlotClick = (slotId: string) => {
    const slot = availableSlots.find((slot) => slot._id === slotId);
    if (slot && !slot.booked) {
      setSelectedSlot(slotId);
    }
  };

  const handleBookService = async () => {
    if (selectedSlot && formattedDate) {
      try {
        // dispatch(setBookingStatus("loading"));

        const bookingDetails = {
          serviceId,
          slotId: selectedSlot,
          vehicleType,
          vehicleBrand,
          vehicleModel,
          date: formattedDate,
        };
        // Perform the API call
        const response = await createBooking(bookingDetails).unwrap();
        console.log("Booking Details: azir", bookingDetails);
        if (response.success) {
          dispatch(
            addBooking({
              _id: response.data._id,
              serviceId,
              slotId: selectedSlot,
              vehicle: { vehicleType, vehicleBrand, vehicleModel },
              date: formattedDate,
            })
          );
          // dispatch(setBookingStatus("success"));
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration is successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          setSelectedSlot(null); // Reset selected slot
        }
        navigate("/bookings", {
          state: {
            serviceName: serviceName,
            selectedSlot: selectedSlot,
          },
        });
      } catch (error) {
        // dispatch(setBookingStatus("failed"));
        console.error("Booking failed:", error);
      }
    } else {
      alert("Please fill in all vehicle details.");
    }
  };

  return (
    <div>
      <div className="mb-4 bg-slate-200">
        {/* DatePicker for selecting the date */}
        <div className="">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="border text-center border-gray-300 rounded p-2"
          />
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Vehicle Type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-2 text-black text-center"
          />
          <input
            type="text"
            placeholder="Vehicle Brand"
            value={vehicleBrand}
            onChange={(e) => setVehicleBrand(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-2 text-center"
          />
          <input
            type="text"
            placeholder="Vehicle Model"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            className="border border-gray-300 rounded p-2 text-center"
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
              onClick={handleBookService} // Trigger booking
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
