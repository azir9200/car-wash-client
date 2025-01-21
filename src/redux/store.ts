
import registerReducer from "./features/registerSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";
import bookingReducer from "./features/bookingSlice";
import loginReducer from "./features/loginSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { baseApi } from "./Api/baseApi";

const persistUserConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    register: registerReducer,
    login: loginReducer,
    user: persistedUserReducer,
    bookings: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>; // Infers the state structure
export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type AppStore = typeof store; // Type for the store

// Persistor to manage rehydration of state
export const persistor = persistStore(store);
