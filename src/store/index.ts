import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./queries/base";
import { authAPI } from "./queries/auth";
import { rtkQueryErrorLogger } from "./midleware";
import auth from "./slices/auth";

export const store = configureStore({
  reducer: { [authAPI.reducerPath]: authAPI.reducer, auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(rtkQueryErrorLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
