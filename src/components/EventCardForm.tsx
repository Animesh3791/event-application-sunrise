import React, { useState } from "react";
import "./styles.css";
import { Box, Grid2 as Grid, Button, TextField } from "@mui/material";
import {
  createEvent,
  deleteEvent,
  getEvent,
  updateEvent
} from "../services/crud";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/ModalSlice";
import { updateEventArray } from "../store/EventsSlice";
import { User } from "../common/interface";
export const EventCardForm = ({
  isNewEvent = false,
  event = {
    name: "",
    location: "",
    id: ""
  }
}: {
  isNewEvent: boolean;
  event: {
    name: string;
    location: string;
    id: string;
  };
}) => {
  const user: User = useSelector((state: any) => state.users.user);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<{
    name: string;
    location: string;
  }>({ name: event.name, location: event.location });
  const dispatch = useDispatch();
  const createEventHandler = async () => {
    const response = await createEvent({
      name: selectedEvent.name,
      location: selectedEvent.location
    });
    if (!response.success) setErrorMessage(response.message);
    else {
      setErrorMessage("");
      const getEventResponse = await getEvent();
      dispatch(updateEventArray({ events: getEventResponse.events }));
      dispatch(closeModal());
    }
  };

  const deleteEventHandler = async () => {
    const response = await deleteEvent(event.id);
    if (!response.success) setErrorMessage(response.message);
    else {
      setErrorMessage("");
      const getEventResponse = await getEvent();
      dispatch(updateEventArray({ events: getEventResponse.events }));
      dispatch(closeModal());
    }
  };

  const updateEventHandler = async () => {
    const response = await updateEvent({
      id: event.id,
      name: selectedEvent.name,
      location: selectedEvent.location
    });
    if (!response.success) setErrorMessage(response.message);
    else {
      setErrorMessage("");
      const getEventResponse = await getEvent();
      console.log(getEventResponse);
      dispatch(updateEventArray({ events: getEventResponse.events }));
      dispatch(closeModal());
    }
  };

  return (
    <Box className=" login-form" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className="border">
        <Grid size={12} className="border">
          <TextField
            id="outlined-basic"
            label="Event Name"
            variant="outlined"
            className="login-form-inputs"
            disabled={!user.isLoggedIn}
            value={selectedEvent.name}
            onChange={(e) => {
              setSelectedEvent({
                ...selectedEvent,
                name: e.target.value
              });
            }}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            disabled={!user.isLoggedIn}
            className="login-form-inputs"
            value={selectedEvent.location}
            onChange={(e) => {
              setSelectedEvent({
                ...selectedEvent,
                location: e.target.value
              });
            }}
          />
        </Grid>

        {user.isLoggedIn ? (
          isNewEvent ? (
            <Grid size={12}>
              <Button
                variant="contained"
                className="login-form-inputs login-form-input-btn "
                onClick={() => createEventHandler()}>
                Save
              </Button>
            </Grid>
          ) : (
            <>
              <Grid size={6}>
                <Button
                  variant="contained"
                  className="login-form-inputs login-form-input-btn "
                  onClick={() => {
                    updateEventHandler();
                  }}>
                  Update
                </Button>
              </Grid>
              <Grid size={6}>
                <Button
                  variant="contained"
                  className="login-form-inputs login-form-input-btn "
                  onClick={() => {
                    deleteEventHandler();
                  }}>
                  Delete
                </Button>
              </Grid>
            </>
          )
        ) : (
          <></>
        )}

        {errorMessage.length ? (
          <Grid size={12} className="error-response-message">
            <div>* {errorMessage}</div>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};
