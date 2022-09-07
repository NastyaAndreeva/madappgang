import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';
import { addNewUser } from 'api/fetchContacts';

addNewUser({
  name: 'Anastasia Xandria',
  email: 'xandria-0312@mail.com',
  password: 'QWERTY098',
});

export const App = () => {
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
        <ContactForm />

        <h2>Contacts</h2>
        <label htmlFor="filter">
          Find contacts by name
          <Filter />
        </label>

        <>
          <FriendList />
        </>
      </Box>
      <ToastContainer autoClose={3000} />
    </>
  );
};
