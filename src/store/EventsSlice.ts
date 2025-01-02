import { createSlice } from "@reduxjs/toolkit";
export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    selectedEvent: {
      name: "",
      location: "",
      id: ""
    }
  },
  reducers: {
    updateEventArray: (
      state: any,
      action: {
        payload: {
          events: any[];
        };
        type: string;
      }
    ) => {
      state.events = [...action.payload.events];
    },
    selectEvent: (
      state,
      action: {
        payload: {
          name: string;
          location: string;
          id: string;
        };
      }
    ) => {
      state.selectedEvent = {
        name: action.payload.name,
        location: action.payload.location,
        id: action.payload.id
      };
    }
  }
});

export const { updateEventArray, selectEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
