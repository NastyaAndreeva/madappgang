import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';
import { useRedux } from 'hooks';
import {
  addContact,
  deleteContact,
  changeFilter,
  getContacts,
  getFilter,
} from 'store/contacts';

export const App = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(getContacts);
  const filter = selector(getFilter);

  const dataValidation = data =>
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  const handleSubmit = data => {
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

    dispatch(addContact(contact));
  };

  const deleteContactbyId = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFormFilter = e => {
    return dispatch(changeFilter(e.currentTarget.value));
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
        <ContactForm onSubmit={handleSubmit} />

        <h2>Contacts</h2>
        <label htmlFor="filter">
          Find contacts by name
          <Filter value={filter} onChange={changeFormFilter} />
        </label>
        {contacts.length !== 0 && (
          <>
            <div>Friend list</div>
            <FriendList
              friends={friendList}
              onDeleteContact={deleteContactbyId}
            />
          </>
        )}
      </Box>
      <ToastContainer autoClose={3000} />
    </>
  );
};
