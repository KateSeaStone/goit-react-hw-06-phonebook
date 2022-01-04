import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/Contacts/contacts-actions";
import "./ContactForm.scss";
import { getContacts } from "../../redux/Contacts/contacts-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedName = contacts.map((contact) =>
      contact.name.toLowerCase()
    );

    if (normalizedName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
    }
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label className="label__name">
        Name
        <input
          className="input__form"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="label__name">
        Number
        <input
          className="input__form"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="addContactBtn">
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsActions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
