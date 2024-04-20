import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navSlice";
import languageReducer from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    language: languageReducer,
  },
});
