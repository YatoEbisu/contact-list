import { action } from 'typesafe-actions';
import { ContactListTypes, ContactList } from './types';

export const loadRequest = () => action(ContactListTypes.LOAD_REQUEST);
export const loadSuccess = (data: ContactList[]) => action(ContactListTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ContactListTypes.LOAD_FAILURE);

export const deleteContactRequest = () => action(ContactListTypes.DELETE_CONTACT_REQUEST);
export const deleteContactSuccess = (data: ContactList) => action(ContactListTypes.DELETE_CONTACT_SUCCESS, { data });
export const deleteContactFailure = () => action(ContactListTypes.DELETE_CONTACT_FAILURE);
