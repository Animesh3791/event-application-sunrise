import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modals",
  initialState: {
    open: false,
    modalType: ""
  },
  reducers: {
    openModal: (state, action: { payload: { type: string }; type: string }) => {
      state.open = true;
      state.modalType = action.payload.type;
    },
    closeModal: (state) => {
      state.open = false;
      state.modalType = "";
    }
  }
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
