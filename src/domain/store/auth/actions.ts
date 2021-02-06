import { iLoginRequest } from "@services/endpoints/auth/types";
import { ActionCreator } from "@store/utils/ActionCreator";

import { sliceName } from "./authSlice";

const actionCreator = new ActionCreator(sliceName);

export const loginAction = actionCreator.createAction<iLoginRequest>(
  "loginRequest"
);
