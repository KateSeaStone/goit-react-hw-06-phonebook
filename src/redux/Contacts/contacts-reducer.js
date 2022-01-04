import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
});
