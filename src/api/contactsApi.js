import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export default contactsApi;
