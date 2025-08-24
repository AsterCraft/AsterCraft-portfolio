import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  },
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },

    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },

    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setMessage, setPhone } =
  contactFormSlice.actions;
export const contactFormReducer = contactFormSlice.reducer;
