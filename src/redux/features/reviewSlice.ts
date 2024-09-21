import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  rating: "",
  comment: "",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { setRating, setComment } = reviewSlice.actions;
export default reviewSlice.reducer;
