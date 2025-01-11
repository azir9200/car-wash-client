/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, } from "@reduxjs/toolkit";

// interface Booking {
//   _id: string;
//   serviceId: any;

//   date: string;
// }

const initialState = {
  bookings: [] as any,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const isExist = state.bookings.find(
        (booking: { _id: any }) => booking._id === action.payload._id
      );
      if (!isExist) {
        state.bookings.push({ ...action.payload, quantity: 1 });
      }
    },
    //update booking number
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
