/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vehicle {
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
}

interface Booking {
  _id: string;
  serviceId: string | null;
  slotId: string | null;
  vehicle: Vehicle;
  date: string;
}

// interface BookingState {
//   bookings: Booking[];
//   bookingStatus: "idle" | "loading" | "success" | "failed";
// }

// const initialState: BookingState = {
//   bookings: [],
//   bookingStatus: "idle",
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     setBookings: (state, action: PayloadAction<Booking[]>) => {
//       state.bookings = action.payload; // Update the bookings array
//     },
//     addBooking: (state, action: PayloadAction<Booking>) => {
//       state.bookings.push(action.payload); // Add a new booking
//     },
//     removeBooking: (state, action: PayloadAction<string>) => {
//       state.bookings = state.bookings.filter(
//         (booking) => booking._id !== action.payload
//       ); // Remove a booking by id
//     },
//     setBookingStatus: (
//       state,
//       action: PayloadAction<"idle" | "loading" | "success" | "failed">
//     ) => {
//       state.bookingStatus = action.payload; // Update booking status
//     },
//     resetBookings: (state) => {
//       state.bookings = []; // Reset the bookings array
//       state.bookingStatus = "idle"; // Reset status
//     },
//   },
// });

// export const {
//   setBookings,
//   addBooking,
//   removeBooking,
//   setBookingStatus,
//   resetBookings,
// } = bookingSlice.actions;
// export default bookingSlice.reducer;

// Define the initial state using that type
const initialState = {
  bookingArray: [] as any,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookingArray.push(action.payload); // Add a new booking
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
