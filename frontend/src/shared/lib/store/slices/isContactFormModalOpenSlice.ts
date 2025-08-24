import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const isContactFormModalOpenSlice = createSlice({
  name: "isContactFormModalOpen",
  initialState: {
    isOpen: false as boolean | undefined,
  },
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = isContactFormModalOpenSlice.actions;
export const setIsOpenReducer = isContactFormModalOpenSlice.reducer;
