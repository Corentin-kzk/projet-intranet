import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.value = action.payload  ;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD } = userSlice.actions;

export default userSlice.reducer;
