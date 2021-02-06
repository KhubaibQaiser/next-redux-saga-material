export type AsyncActions = {
  REQUEST: string;
  LOADED: string;
  ERROR: string;
};

export interface ReducerAction<T> {
  type: string;
  payload: T;
}

export type AsyncStateType<T> = {
  isLoading: boolean;
  isLoaded: boolean;
  data?: T;
  error?: unknown;
};
