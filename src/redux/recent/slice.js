import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "recent",
  initialState: {
    id: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = slice.actions;

export default slice.reducer;
