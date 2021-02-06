import { ApiResponse } from "apisauce";

export interface iErrorResponse {
  message: string;
}

type iApiResponse<T> = Promise<ApiResponse<T, iErrorResponse>>;

export default iApiResponse;
