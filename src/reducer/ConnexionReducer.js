import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isConnected : false
} 

export const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isConnected = true
    },
    logOut: (state) => {
      state.isConnected = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = connexionSlice.actions;

export default connexionSlice.reducer;
