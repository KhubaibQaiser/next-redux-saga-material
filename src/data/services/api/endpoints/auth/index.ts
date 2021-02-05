import iApiResponse from "@services/api/types";

import api from "../../index";
import { iLoginRequest, iLoginResponse } from "./types";
import * as ApiUrls from "./url";

export const login = ({
  username,
  password,
}: iLoginRequest): iApiResponse<iLoginResponse> => {
  return api.post(ApiUrls.login, { username, password });
};
