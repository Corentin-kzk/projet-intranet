import { createSlice } from "@reduxjs/toolkit";
import removelocalsession from "../Service/removelocalsession.service";


const token = sessionStorage.getItem("jwt");
let initialState = {};
if (!token) {
  initialState = {
    isConnected: false,
  };
} else {
  initialState = {
    isConnected: true,
  };
}

export const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isConnected = true;
    },
    logOut: (state) => {
      console.log("🚀 ~ file: ConnexionReducer.js ~ line 25 ~ state", state)
      removelocalsession("jwt");
      state.isConnected = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = connexionSlice.actions;

export default connexionSlice.reducer;
