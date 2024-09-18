import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  token: "",
  user: {
    _id: "",
    email: "",
    role: "",
    exp: "",
    iat: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.token = "";  
      state.user = {      
        _id: "",
        email: "",
        role: "",
        exp: "",
        iat: "",
      };
    },
  },
});

export const { setToken, setUser, } = userSlice.actions;
export default userSlice.reducer;


export const useCurrentToken = (state: RootState) => state.user.token;
export const selectCurrentUser = (state: RootState) => state.user.user;