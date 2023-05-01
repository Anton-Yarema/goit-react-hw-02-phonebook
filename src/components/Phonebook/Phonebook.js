import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from 'components/ContactForm/';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const { contacts } = this.state;
    const chekContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (chekContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          value={filter}
          data={contacts}
          onDeleteContact={this.deleteContact}
        />
          
        
      </div>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,
  addContacts: PropTypes.func,
  handleFilterChange: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default Phonebook;
