import React, { useEffect } from "react";
import "./styles.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Grid2 as Grid,
  Box,
  Button
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../common/interface";
import { openModal } from "../store/ModalSlice";
import { getEvent } from "../services/crud";
import { selectEvent, updateEventArray } from "../store/EventsSlice";

export const EventsTable = () => {
  const user: User = useSelector((state: any) => state.users.user);
  const eventFromStore = useSelector((state: any) => state.events.events);
  const dispatch = useDispatch();
  const fetchEvents = async () => {
    const events = await getEvent();
    dispatch(updateEventArray({ events: events.events }));
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  const openCreateEventModal = () => {
    dispatch(selectEvent({ name: "", location: "", id: "" }));
    dispatch(openModal({ type: "new_event" }));
  };
  const openModifyEventModal = (event: {
    name: string;
    location: string;
    id: string;
  }) => {
    dispatch(
      selectEvent({ name: event.name, location: event.location, id: event.id })
    );
    dispatch(openModal({ type: "existing_event" }));
  };

  const openModalViewMode = (event: {
    name: string;
    location: string;
    id: string;
  }) => {
    dispatch(
      selectEvent({ name: event.name, location: event.location, id: event.id })
    );
    dispatch(openModal({ type: "existing_event" }));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={1}></Grid>
        <Grid size={10}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-head-row">
                <TableRow>
                  <TableCell className="table-head-cell">Events</TableCell>
                  <TableCell className="table-head-cell">Location</TableCell>
                  <TableCell className="table-head-cell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eventFromStore.length ? (
                  eventFromStore.map((event: any) => {
                    return (
                      <TableRow key={event.id}>
                        <TableCell className="table-body-cell">
                          {event.name}
                        </TableCell>
                        <TableCell className="table-body-cell">
                          {event.location}
                        </TableCell>
                        <TableCell className="table-body-cell">
                          {!user.isLoggedIn ? (
                            <Button onClick={() => openModalViewMode(event)}>
                              View
                            </Button>
                          ) : (
                            <Button onClick={() => openModifyEventModal(event)}>
                              Modify
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {user.isLoggedIn ? (
          <Grid size={12}>
            <Button
              variant="contained"
              onClick={() => {
                openCreateEventModal();
              }}
              className="add-event-btn">
              Add Event
            </Button>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};
