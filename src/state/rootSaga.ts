import { all } from 'redux-saga/effects';
import { userWatcher } from './features/user';
import { columnsWatcher } from './features/columns';
import { prayersWatcher } from './features/prayers';
import { commentsWatcher } from './features/comments';

export default function* () {
  yield all([
    userWatcher(),
    columnsWatcher(),
    prayersWatcher(),
    commentsWatcher(),
  ]);
}
