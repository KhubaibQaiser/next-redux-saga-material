import { ApiResponse } from "apisauce";

export interface ErrorResponse {
  message: string;
}

type iApiResponse<T> = Promise<ApiResponse<T, ErrorResponse>>;

export default iApiResponse;
