import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactsList from "./Components/ContactsList";
// import s from './App.module.css'

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (number, name) => {
    return this.setState((ps) => ({
      contacts: [
        ...ps.contacts,
        {
          number,
          name,
          id: nanoid(),
        },
      ],
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFindContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { handleFilterChange, getFindContact, addContact } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <br />
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactsList list={getFindContact()} />
      </div>
    );
  }
}

export default App;
