export interface iAsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: unknown | null;
}
