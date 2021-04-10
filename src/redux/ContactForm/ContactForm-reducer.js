import { combineReducers } from 'redux';
import types from './ContactForm-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      if (state.find(contact => contact.name === payload.name)) {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }
      return [...state, payload];
    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
