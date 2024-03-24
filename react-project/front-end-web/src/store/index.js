import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
