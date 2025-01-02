import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
  name: "users",
  initialState: {
    user: {
      email: "",
      password: "",
      name: "",
      isLoggedIn: false
    }
  },
  reducers: {
    updateUser: (
      state: any,
      action: {
        payload: {
          user: {
            email: string;
            password: string;
            name: string;
          };
        };
        type: string;
      }
    ) => {
      state.user = {
        ...state.user,
        email: action.payload.user.email,
        password: action.payload.user.password,
        name: action.payload.user.name,
        isLoggedIn: !!action.payload.user.email.length
      };
    }
  }
});

export const { updateUser } = UserSlice.actions;
export default UserSlice.reducer;
