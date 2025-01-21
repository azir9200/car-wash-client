/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [] as any,
  selectedItems: 0,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const isExist = state.services.find(
        (booking: { _id: any }) => booking._id === action.payload._id
      );
      if (!isExist) {
        state.services.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems({ services: state.services });
    },
    //update booking number
    updateQuantity: (state: any, action) => {
      state.services.map((service: any) => {
        if (service._id === action.payload._id) {
          if (action.payload.type === "increment") {
            service.quantity += 1;
          } else if (action.payload.type === "decrement") {
            service.quantity -= 1;
          }
        }
        return service;
      });
      state.selectedItems = selectSelectedItems(state);
    },
    clearCart: (state) => {
      state.services = [];
      state.selectedItems = 0;
    },
  },
});

export const selectSelectedItems = (state: any) =>
  (state.services || []).reduce((total: number, service: any) => {
    return total + service.quantity;
  }, 0);

export const { addBooking, clearCart } = bookingSlice.actions;
export default bookingSlice.reducer;
