import api from "@services/api/";
import iApiResponse from "@services/api/types";

import { iLoginRequest, iLoginResponse } from "./types";
import * as ApiUrls from "./url";

export const loginApi = ({
  username,
  password,
}: iLoginRequest): iApiResponse<iLoginResponse> => {
  return api.post(ApiUrls.login, { username, password });
};
