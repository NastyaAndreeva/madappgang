import { apiInstance } from 'api';

export const getAddedDragons = () => apiInstance.get('/dragons');

export const postDragon = dragon => apiInstance.post('/dragons', dragon);

export const removeDragon = dragonId =>
  apiInstance.delete(`/dragons/${dragonId}`);
