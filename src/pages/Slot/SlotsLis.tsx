/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBookingMutation } from "@/redux/Api/bookingApi";
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { addBooking } from "@/redux/features/bookingSlice";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // For date selection
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Define the Slot type if not defined elsewhere
interface Slot {
  _id: string;
  startTime: string;
  endTime: string;
  booked: boolean;
}

const SlotsList = ({ serviceId }: { serviceId: string }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [vehicleType, setVehicleType] = useState<string>(""); // Track vehicle data
  const [vehicleBrand, setVehicleBrand] = useState<string>("");
  const [vehicleModel, setVehicleModel] = useState<string>("");
  const formattedDate = selectedDate?.toISOString().split("T")[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [slotTime, setSlotTime] = useState(null);

  const { data: slotsResponse, isLoading, error } = useGetAvailableSlotQuery(serviceId, formattedDate as string);
  const [createBooking] = useCreateBookingMutation();

  const availableSlots: Slot[] = slotsResponse?.data || [];
  console.log(serviceId, " service id");
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
    const slot = availableSlots.find((slot: any) => slot._id === slotId);
    if (slot && !slot.booked) {
      // setSelectedSlot(slot);
      setSelectedSlot(slot._id);
    }
  };

  const handleBookService = async () => {
    if (selectedSlot && formattedDate) {
      try {
        const bookingDetails = {
          serviceId,
          slotId: selectedSlot,
          vehicleType,
          vehicleBrand,
          vehicleModel,
          date: formattedDate,
        };
        console.log("booking details", bookingDetails);
        const response = await createBooking(bookingDetails).unwrap();
        console.log("respponse", response);

        if (response.success) {
          dispatch(
            addBooking({
              _id: response.data._id, // Assuming _id is returned in response
              serviceId,
              slotId: selectedSlot,
              vehicle: {
                vehicleType,
                vehicleBrand,
                vehicleModel,
              },
              date: formattedDate,
            })
          );

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Slot Booking is successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          setSelectedSlot(null);
        }
        navigate(`/bookings/${serviceId}`, {
          state: {
            serviceName: response.data.serviceName, // Assuming this is available in the response
            selectedSlot,
          },
        });
      } catch (error) {
        console.error("Booking failed:", error);
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Booking not success!",
        showConfirmButton: false,
        timer: 1500,
      });
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
            <Link
              to={`/bookings/${serviceId}`}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={handleBookService} // Trigger booking
            >
              Book This Service
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotsList;
