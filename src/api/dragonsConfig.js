import axios from 'axios';
import { DRAGONS_BASE_URL } from 'constants';

export const dragonsApi = axios.create({
  baseURL: DRAGONS_BASE_URL,
});
