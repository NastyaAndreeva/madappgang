import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';
import { CONTACTS_KEY } from 'constants/constants';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem(CONTACTS_KEY);
    if (data) {
      setContacts(JSON.parse(data));
    }
  }, []);

  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  //   }
  // }, []);

  // componentDidUpdate(_, prevState) {
  //   const { contacts } = this.state;

  //   if (prevState.contacts !== contacts) {
  //     localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  //   }
  // }

  const dataValidation = data =>
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  const addContact = data => {
    const isAlreadyAdded = dataValidation(data);

    if (isAlreadyAdded) {
      toast.error(`${data.name} is already in your contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts(state => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  const deleteContact = contactId => {
    setContacts(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const changeFilter = e => {
    return setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const friendList = getFilteredContacts();

  return (
    <>
      <Box
        width="400px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        as="section"
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <label htmlFor="filter">
          Find contacts by name
          <Filter value={filter} onChange={changeFilter} />
        </label>
        {friendList.length !== 0 && (
          <FriendList friends={friendList} onDeleteContact={deleteContact} />
        )}
      </Box>
      <ToastContainer autoClose={3000} />
    </>
  );
};
