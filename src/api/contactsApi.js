import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://6309b66132499100327a97ec.mockapi.io/api/v1/contacts',
});

export default contactsApi;
