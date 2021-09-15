import { all } from 'redux-saga/effects';
import { userWatcher } from './features/user';

export default function* toorSaga() {
  yield all([
    userWatcher(),
  ]);
}
