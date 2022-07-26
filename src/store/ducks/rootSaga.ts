import { all, takeLatest } from 'redux-saga/effects';

import { ContactListTypes } from './contactList/types';
import { load, deleteContact } from './contactList/sagas';

export default function* rootSaga() :any {
  return yield all([
    takeLatest(ContactListTypes.LOAD_REQUEST, load),
    takeLatest(ContactListTypes.DELETE_CONTACT_REQUEST, deleteContact ),
  ]);
}
