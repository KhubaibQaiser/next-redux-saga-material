import {
  createAction as ReduxActionCreator,
  PayloadActionCreator,
} from "@reduxjs/toolkit";

export class ActionCreator {
  sliceName = "";

  constructor(sliceName: string) {
    this.sliceName = sliceName;
  }

  createAction<T>(type: string): PayloadActionCreator<T> {
    return ReduxActionCreator(`${this.sliceName}/${type}`);
  }
}
