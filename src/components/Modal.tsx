import React, { useEffect } from "react";
import "./styles.css";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/ModalSlice";
import { SignInForm } from "./SignInForm";
import { EventCardForm } from "./EventCardForm";

export const ModalComponent = () => {
  const modalState = useSelector((state: any) => state.modal);
  const selectedEvent = useSelector((state: any) => state.events.selectedEvent);

  const dispatch = useDispatch();
  console.log(modalState);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal
        open={modalState.open}
        onClose={() => {
          handleCloseModal();
        }}>
        <Box className="modal">
          {modalState.modalType === "login" ? (
            <SignInForm />
          ) : modalState.modalType === "new_event" ? (
            <EventCardForm
              isNewEvent={true}
              event={{ name: "", location: "", id: "" }}
            />
          ) : modalState.modalType === "existing_event" ? (
            <EventCardForm
              isNewEvent={false}
              event={{
                name: selectedEvent.name,
                location: selectedEvent.location,
                id: selectedEvent.id
              }}
            />
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </div>
  );
};
