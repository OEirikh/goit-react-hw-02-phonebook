import React, { Component } from "react";
import { nanoid } from "nanoid";
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
    name: "",
    number: "",
    filter: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = () => {
    const { number, name } = this.state;
    return (
      this.setState((ps) => ({
        contacts: [
          ...ps.contacts,
          {
            number: number,
            name: name,
            id: nanoid(),
          },
        ],
      })),
      this.setState({
        name: "",
        number: "",
      })
    );
  };

  getFindContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const { onInputChange, addContact, getFindContacts } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <br />
        <form>
          <label>
            Name
            <input
              onChange={onInputChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={onInputChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="button" onClick={addContact}>
            Add Contact
          </button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            onChange={onInputChange}
            value={filter}
            type="text"
            name="filter"
          />
        </label>

        <ContactsList list={getFindContacts()} />
      </div>
    );
  }
}

export default App;
