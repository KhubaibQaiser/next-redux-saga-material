import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, Reducer, Store } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { Task } from "redux-saga";

import RootReducer, { RootState } from "./reducers";
import RootSaga from "./sagas";

export interface iAppStore extends Store {
  sagaTask?: Task;
}

const makeConfiguredStore = (
  reducer: Reducer<RootState, AnyAction>
): iAppStore => {
  // Add any additional middlewares e.g. saga middleware. Defaults to thunk
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ];
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }
  const store = configureStore({
    reducer,
    middleware,
    devTools: true,
  });
  const appStore: iAppStore = store;
  sagaMiddleware.run(RootSaga);
  return appStore;
};

const initStore: MakeStore<RootState> = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(RootReducer);
  }
  // Integrate persistor, if needed, and use persisted reducer to pass to makeConfiguredStore
  const store = makeConfiguredStore(RootReducer);
  return store;
};

export default createWrapper(initStore);
