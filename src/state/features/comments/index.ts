import commentsReducer from './slice';
import { commentsActions } from './slice';
import commentsWatcher from './sagas';
import * as commentsSelectors from './selectors';

export {
  commentsActions,
  commentsSelectors,
  commentsWatcher,
};

export default commentsReducer;
