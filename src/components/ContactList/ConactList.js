import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";
import {
  getContacts,
  getFilter,
  getFilteredContacts,
} from "../../redux/Contacts/contacts-selectors";

import contactsActions from "../../redux/Contacts/contacts-actions";

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const onDelete = (contactId) =>
    dispatch(contactsActions.deleteContact(contactId));

  return (
    <ul className="contactList">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
