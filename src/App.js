import "./App.scss";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";
import Filter from "./components/Filter";

export default function App() {
  return (
    <Container>
      <h1 className="main__title">Phonebook</h1>
      <ContactForm />
      <h2 className="contacts__title">Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
