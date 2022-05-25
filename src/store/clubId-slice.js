import { createSlice } from "@reduxjs/toolkit";

const clubIdSlice = createSlice({
  name: "clubId",
  initialState: {
    clubId: null,
    clubBoardId: null,
    data: null,
    isLock: null,
  },
  reducers: {
    changeClubId(state, action) {
      state.clubId = action.payload.clubId;
    },

    changeClubBoardId(state, action) {
      state.clubBoardId = action.payload.clubBoardId;
    },

    changeData(state, action) {
      state.data = action.payload.data;
    },

    changeAll(state, action) {
      state.clubId = action.payload.clubId;
      state.clubBoardId = action.payload.clubBoardId;
      state.data = action.payload.data;
    },

    changeLock(state, action) {
      state.isLock = action.payload.isLock;
    },

    toggleLock(state) {
      state.isLock = !state.isLock;
    },
  },
});

export const clubIdActions = clubIdSlice.actions;
export default clubIdSlice;
