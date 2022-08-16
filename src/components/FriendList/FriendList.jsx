import styled from 'styled-components';
import { RiContactsBook2Line } from 'react-icons/ri';
import { Button } from 'components/ui/Button';
import { theme } from 'stylesConfig/theme';
import { useRedux } from 'hooks';
import { deleteContact, getContacts, getFilter } from 'store/contacts';

const FriendListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin: 5px;
  }
`;

export const FriendList = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(getContacts);
  const filter = selector(getFilter);

  const deleteContactbyId = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const friendList = getFilteredContacts();
  return (
    <FriendListStyled>
      {friendList.map(({ id, name, number }) => (
        <FriendListItem key={id}>
          <RiContactsBook2Line fill={theme.colors.backgroundBlueBtn} />
          <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={() => deleteContactbyId(id)}>
            Delete
          </Button>
        </FriendListItem>
      ))}
    </FriendListStyled>
  );
};
