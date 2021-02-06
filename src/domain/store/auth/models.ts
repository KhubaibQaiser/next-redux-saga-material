import { iLoginResponse } from "@services/endpoints/auth/types";

import { iAsyncState } from "../types";

type iAuthSlice = iAsyncState<iLoginResponse>;

export default iAuthSlice;
