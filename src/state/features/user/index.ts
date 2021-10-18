import userReducer from './slice';
import userActions from './actions';
import { userWatcher } from './sagas';
import * as userSelectors from './selectors';

export {
  userActions,
  userWatcher,
  userSelectors,
};

export default userReducer;
