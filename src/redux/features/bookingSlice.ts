/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Vehicle {
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
}

interface Booking {
  _id: string;
  serviceId: any;
  slotId: any;
  vehicle: Vehicle;
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
