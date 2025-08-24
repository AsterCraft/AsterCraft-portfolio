import { configureStore } from "@reduxjs/toolkit";

import {
  setIsOpen,
  setIsOpenReducer,
} from "../../shared/lib/store/slices/isContactFormModalOpenSlice";
import {
  setEmail,
  setFirstName,
  setLastName,
  setMessage,
  setPhone,
  contactFormReducer,
} from "../../features/ContactForm/model/contactFormSlice";

export type StoreType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    isContactFormModalOpen: setIsOpenReducer,
    contactForm: contactFormReducer,
  },
});

export {
  store,
  setIsOpen,
  setEmail,
  setFirstName,
  setLastName,
  setMessage,
  setPhone,
};
