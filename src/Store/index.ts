import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./Github/github.api";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  }
})