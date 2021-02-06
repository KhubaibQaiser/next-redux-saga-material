import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { iLoginResponse } from "@services/endpoints/auth/types";
import { RootState } from "@store/reducers";

import iAuthSlice from "./models";

export const authSelector = createDraftSafeSelector<
  RootState,
  iAuthSlice,
  iLoginResponse | null
>(
  (state) => state.auth,
  (state) => state.data
);
