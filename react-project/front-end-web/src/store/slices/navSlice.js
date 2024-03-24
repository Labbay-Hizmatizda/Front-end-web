import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    navigationState: "Dashboard",
  },
  reducers: {
    changeNavigationState(state, action) {
      state.navigationState = action.payload;
    },
  },
});

export const { changeNavigationState } = navigationSlice.actions;
export default navigationSlice.reducer;
