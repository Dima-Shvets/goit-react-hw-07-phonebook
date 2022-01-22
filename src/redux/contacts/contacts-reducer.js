import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../contacts/contacts-actions';

const items = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },

  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.updateFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {});

export default combineReducers({
  items,
  filter,
});
