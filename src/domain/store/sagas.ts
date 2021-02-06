/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AuthSagas } from "@store/auth";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...AuthSagas]);
}
