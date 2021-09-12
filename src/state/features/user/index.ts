import userReducer from './slice';
import userActions from './actions';
import { userWatcher } from './sagas';

export {
  userActions,
  userWatcher,
};

export default userReducer;
