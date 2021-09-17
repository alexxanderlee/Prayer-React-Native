import { all } from 'redux-saga/effects';
import { userWatcher } from './features/user';
import { columnsWatcher } from './features/columns';

export default function* () {
  yield all([
    userWatcher(),
    columnsWatcher(),
  ]);
}
