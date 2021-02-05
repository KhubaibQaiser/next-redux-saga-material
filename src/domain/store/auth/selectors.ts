import { createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootState } from "..";
import iAuthSlice from "./models";

export const authSelector = createDraftSafeSelector<RootState, iAuthSlice, any>(
  (state) => state.auth,
  (state) => state.data
);
