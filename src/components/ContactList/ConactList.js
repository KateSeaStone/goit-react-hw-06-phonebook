import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";
import { connect } from "react-redux";
import contactsActions from "../../redux/Contacts/contacts-actions";

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = (props) => {
  const { contacts, onDelete, filter } = props;
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
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactId) => dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
