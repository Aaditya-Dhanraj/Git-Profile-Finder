import { configureStore } from "@reduxjs/toolkit";

import PageUiSlice from "./uiSlice";

const store = configureStore({
  reducer: { ui: PageUiSlice.reducer },
});

export default store;
