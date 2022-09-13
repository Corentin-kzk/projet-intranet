import { createSlice } from "@reduxjs/toolkit";
import stockLocalSessions from "../Service/stocklocalsessions.service";

const user = JSON.parse(sessionStorage.getItem("user"));
let initialState = user ? user : {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.value = action.payload.user;
      stockLocalSessions("user", JSON.stringify(action.payload.user));
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD } = userSlice.actions;

export default userSlice.reducer;
