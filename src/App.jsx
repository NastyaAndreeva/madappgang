import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';
import { useRedux } from 'hooks';
import { getContacts } from 'store/contacts';

export const App = () => {
  const [selector] = useRedux();
  const contacts = selector(getContacts);
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
        {contacts.length !== 0 && (
          <>
            <div>Friend list</div>
            <FriendList />
          </>
        )}
      </Box>
      <ToastContainer autoClose={3000} />
    </>
  );
};

// function isIsogram(str) {
//   const normalizedArr = str.toLowerCase().split('').sort();
//   const uniqueElements = normalizedArr.filter(
//     (el, index, array) => array.indexOf(el) === index
//   );
//   return uniqueElements.length === normalizedArr.length ? true : false;
// }

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size === str.length;
// }

// isIsogram('Dermatoglyphics');

// isIsogram('aba');
// function updateLight(current) {
//   const state = ['green', 'yellow', 'red'];
//   for (let i = 0; i < 3; i++) {
//     if (current === state[i]) {
//       return state[i + 1];
//     }
//   }
// }

// console.log(updateLight('green'));

// const updateLight = current =>
//   ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
//   }[current]);

// console.log(updateLight('green'));

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    let current = numbers[i];
    for (let j = 1; j < numbers.length; j += 1) {
      if (current + numbers[j] === target) {
        return i === j ? [i] : [i, j];
      }
    }
  }
}

console.log(twoSum([2, 2, 3], 4)); // returns [0, 2] or [2, 0]
