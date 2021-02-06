import { Action } from "@reduxjs/toolkit";
import { iErrorResponse } from "@services/api/types";
import * as AuthApi from "@services/endpoints/auth";
import { iLoginResponse } from "@services/endpoints/auth/types";
import { ApiResponse } from "apisauce";
import { call, put, takeLatest } from "redux-saga/effects";

import { loginAction } from "./actions";
import { loggedIn, loggingIn, loginError } from "./authSlice";

function* loginSaga(action: Action) {
  try {
    if (loginAction.match(action)) {
      yield put(loggingIn());
      const response: ApiResponse<iLoginResponse, iErrorResponse> = yield call(
        AuthApi.loginApi,
        action.payload
      );
      if (response.ok) {
        yield put(loggedIn(response.data));
      } else {
        yield put(loginError(response.data));
      }
    }
  } catch (error) {
    yield put(loginError(error));
  }
}

export default [takeLatest(loginAction.toString(), loginSaga)];
