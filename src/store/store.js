import { configureStore } from "@reduxjs/toolkit";
import collabReducer from "../reducer/collabReducer";
import ConnexionReducer from "../reducer/ConnexionReducer";
import userReducer from "../reducer/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    collaborator : collabReducer,
    connexion: ConnexionReducer
  },
});
