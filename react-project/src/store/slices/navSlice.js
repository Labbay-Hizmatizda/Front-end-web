import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    navigationState: sessionStorage.getItem("activeItem") || "Dashboard",
  },
  reducers: {
    changeNavigationState(state, action) {
      state.navigationState = action.payload;
      sessionStorage.setItem("activeItem", action.payload);
    },
  },
});

export const { changeNavigationState } = navigationSlice.actions;
export default navigationSlice.reducer;
