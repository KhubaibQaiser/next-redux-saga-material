// eslint-disable-next-line import/no-cycle
import { RootState } from "@store/reducers";
import { Selector } from "react-redux";
import { Store, Unsubscribe } from "redux";

import { AsyncActions, AsyncStateType, ReducerAction } from "./types";

export const asyncState: AsyncStateType<any> = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null,
};

export default function createReducer(
  initialState: any,
  handlers: any
): (state: any, handler: any) => void {
  return function reducer(
    state = initialState,
    action: ReducerAction<any>
  ): RootState {
    // eslint-disable-next-line no-prototype-builtins
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export function observeStore(
  store: Store,
  select: Selector<RootState, null>,
  onChange: (currentState: any) => void
): Unsubscribe {
  let currentState: any;

  function handleChange() {
    const nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

export function createAsyncAction(action: string): AsyncActions {
  return {
    REQUEST: `${action}_REQUEST`,
    LOADED: `${action}_LOADED`,
    ERROR: `${action}_ERROR`,
  };
}
