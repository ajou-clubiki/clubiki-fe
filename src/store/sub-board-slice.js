import { createSlice } from "@reduxjs/toolkit";

const subBoardSlice = createSlice({
  name: "subBoard",
  initialState: {
    data: {},
  },
  reducers: {
    addSubBoardData(state, action) {
      const index = action.payload.idx;
      state.data[index] = action.payload.data;
    },
  },
});

export const subBoardActions = subBoardSlice.actions;
export default subBoardSlice;
