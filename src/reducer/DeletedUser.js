import { createSlice } from "@reduxjs/toolkit";
import removelocalsession from "../Service/removelocalsession.service";

let initialState = {};

export const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    isDelete: (state) => {
      state.isConnected = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isDelete } = deleteSlice.actions;

export default deleteSlice.reducer;
