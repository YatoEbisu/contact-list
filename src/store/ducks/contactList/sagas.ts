import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, deleteContactSuccess, deleteContactFailure } from './actions';
export function* load(): any {
  try {
    const response = yield call(api.get, '/api/Person');
    console.log(response.data)
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* deleteContact({payload}: any): any {
  try {
    const response = yield call(api.delete, `/api/Contact/${payload}`);
    yield put(deleteContactSuccess(response.data));
  } catch (err) {
    yield put(deleteContactFailure());
  }
}
