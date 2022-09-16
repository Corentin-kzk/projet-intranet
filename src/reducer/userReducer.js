import { createSlice } from "@reduxjs/toolkit";
import stockLocalSessions from "../Service/stocklocalsessions.service";
import removelocalsession from "../Service/removelocalsession.service";

const user = sessionStorage.getItem("user")  ? JSON.parse(sessionStorage.getItem("user")) : null;
let initialState = user ? user : {};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.value = action.payload.user;
      console.log("🚀 ~ file: userReducer.js ~ line 15 ~  action.payload.user",  action.payload.user)
      stockLocalSessions("user", JSON.stringify(action.payload.user));
    },
    userLogOut: (state) => {
      state = {};
      removelocalsession("user");
    }
  },
});

// Action creators are generated for each case reducer function
export const { ADD, userLogOut } = userSlice.actions;

export default userSlice.reducer;
