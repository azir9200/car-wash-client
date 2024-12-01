/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Booking {
  _id: string;
  serviceId: any;

  date: string;
}

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
