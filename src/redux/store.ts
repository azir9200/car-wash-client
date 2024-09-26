import registerReducer from "./features/registerSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";
import bookingReducer from "./features/bookingSlice";
import loginReducer from "./features/loginSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { baseApi } from "./Api/baseApi";
import slotReducer from "./features/slotSlice";

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
    slots: slotReducer,
    bookings: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export type AppStore = typeof store;
