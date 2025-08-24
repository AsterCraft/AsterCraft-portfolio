import { configureStore } from "@reduxjs/toolkit";

import {
  setIsOpen,
  setIsOpenReducer,
} from "../../shared/lib/store/slices/isContactFormModalOpenSlice";

export type StoreType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    isContactFormModalOpen: setIsOpenReducer,
  },
});

export { store, setIsOpen };
