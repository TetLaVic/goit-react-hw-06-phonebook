import types from './ContactForm-types';
import { v4 as genId } from 'uuid';

const addContact = ({ name, number, id }) => {
  return {
    type: types.ADD_CONTACT,
    payload: { name, number, id: genId() },
  };
};

const deleteContact = contactId => {
  return { type: types.DELETE_CONTACT, payload: contactId };
};

const filterChange = value => {
  // this.setState({ filter: event.currentTarget.value });
  return {
    type: types.FILTER_CHANGE,
    payload: value,
  };
};

export default { addContact, deleteContact, filterChange };
