import { configureStore } from "@reduxjs/toolkit";

import clubIdSlice from "./clubId-slice.js";
import subBoardSlice from "./sub-board-slice.js";

const store = configureStore({
  reducer: { clubId: clubIdSlice.reducer, subBoard: subBoardSlice.reducer },
});

export default store;
