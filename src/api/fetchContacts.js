import contactsApi from './contactsApi';

export const addNewUser = async cridentials => {
  try {
    const data = await contactsApi.post('/users/signup', cridentials);
    console.log('data: ', data);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getAllContacts = async () => {
  try {
    const { data } = await contactsApi.get('');
    return data;
  } catch (error) {
    console.log('getAllContacts error');
  }
};

export const deleteContactById = async id => {
  try {
    await contactsApi.delete(`/${id}`);
    const { data } = await contactsApi.get('');
    return data;
  } catch (error) {
    console.log('getContactById error');
  }
};

export const addNewContact = async body => {
  try {
    await contactsApi.post('', body);
    const { data } = await contactsApi.get('');
    return data;
  } catch (error) {
    console.log('addNewContact error');
  }
};
