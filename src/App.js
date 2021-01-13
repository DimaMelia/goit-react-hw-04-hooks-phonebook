import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/Form/ContactForm';
import Container from './Components/Container/Container';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = addedContact => {
    if (
      this.state.contacts.find(contact => contact.name === addedContact.name)
    ) {
      alert(`${addedContact.name} is already in contacts`);
      return;
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, addedContact] }));
    }
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  };

  render() {
    const filteredContacts = this.visibleContacts();

    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
