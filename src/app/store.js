import { configureStore } from "@reduxjs/toolkit";
import clickSlice from "./slices/editform";

import { combineReducers } from "redux";

const reducer = combineReducers({
  clickForm: clickSlice,
});

export const store = configureStore({ reducer });
