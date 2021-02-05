import { create } from "apisauce";

const api = create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60 * 1000,
});

if (process.env.NODE_ENV === "development") {
  api.addRequestTransform((request) => {
    console.log("Request", request);
    return request;
  });

  api.addResponseTransform((response) => {
    console.log("Response", response);
    return response;
  });
}

export const setAuthHeader = (token: string): void => {
  api.setHeader("Authorization", `Token ${token}`);
};

export const resetAuthHeader = (): void => {
  api.deleteHeader("Authorization");
};

export const set401Callback = (callback: () => void): void => {
  api.addResponseTransform((response) => {
    if (response.status === 401) {
      callback();
    }
  });
};

export default api;
