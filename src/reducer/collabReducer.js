import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const collabSlice = createSlice({
  name: "collaborator",
  initialState,
  reducers: {
    setCollab: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD } = collabSlice.actions;

export default collabSlice.reducer;