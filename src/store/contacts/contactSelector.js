import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.items.loading;

const getFilter = state => state.items.filter;

const getAllContacts = state => state.items.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
export default contactsSelectors;
