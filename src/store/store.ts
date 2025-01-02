import { configureStore } from "@reduxjs/toolkit";
import eventsReducers from "./EventsSlice";
import userReducers from "./UserSlice";
import modalReducers from "./ModalSlice";
export const store = configureStore({
  reducer: {
    events: eventsReducers,
    users: userReducers,
    modal: modalReducers
  }
});
