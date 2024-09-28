import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  selectedSlot: null as string | null,
  slots: [] as Array<{ _id: string; booked: boolean }>,
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setSelectedSlot: (state, action: PayloadAction<string | null>) => {
      state.selectedSlot = action.payload;
    },
    setSlots: (
      state,
      action: PayloadAction<Array<{ _id: string; booked: boolean }>>
    ) => {
      state.slots = action.payload;
    },
    bookSlot: (state, action: PayloadAction<string>) => {
      const slot = state.slots.find((slot) => slot._id === action.payload);
      if (slot) {
        slot.booked = true;
      }
    },
  },
});

export const { setSelectedSlot, setSlots, bookSlot } = slotSlice.actions;
export const selectCurrentSlot = (state: RootState) => {
  return state.slots.slots;
};
export default slotSlice.reducer;
