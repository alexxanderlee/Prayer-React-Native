import { all } from 'redux-saga/effects';
import { userWatcher } from './features/user';
import { columnsWatcher } from './features/columns';
import { prayersWatcher } from './features/prayers';

export default function* () {
  yield all([
    userWatcher(),
    columnsWatcher(),
    prayersWatcher(),
  ]);
}
