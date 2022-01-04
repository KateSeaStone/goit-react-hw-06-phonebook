import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

export default {
  addContact,
  deleteContact,
  changeFilter,
};
