import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";

import contactsActions from "../../redux/Contacts/contacts-actions";

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();
  const onDelete = (contactId) =>
    dispatch(contactsActions.deleteContact(contactId));

  const contactsPrepared = filter
    ? getFilteredContacts(contacts, filter)
    : contacts;

  return (
    <ul className="contactList">
      {contactsPrepared.map((contact) => (
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
