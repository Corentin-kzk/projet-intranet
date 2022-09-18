import { configureStore } from "@reduxjs/toolkit";
import collabReducer from "../reducer/collabReducer";
import ConnexionReducer from "../reducer/ConnexionReducer";
import DeletedUser from "../reducer/DeletedUser";
import userReducer from "../reducer/userReducer";

export const store = configureStore({
  reducer: {
    delete : DeletedUser,
    user: userReducer,
    collaborator : collabReducer,
    connexion: ConnexionReducer
  },
});
