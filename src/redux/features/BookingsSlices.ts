// bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  userName: string;
  userEmail: string;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  slotStartTime: string;
  slotEndTime: string;
  slotDate: string;
}

const initialState: BookingState = {
  userName: '',
  userEmail: '',
  serviceName: '',
  serviceDescription: '',
  servicePrice: 0,
  slotStartTime: '',
  slotEndTime: '',
  slotDate: '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails(state, action: PayloadAction<BookingState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
