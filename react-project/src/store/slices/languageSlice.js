import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "ru" },
  reducers: {
    changeLanguage(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
