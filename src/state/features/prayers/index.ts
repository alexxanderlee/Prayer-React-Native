import prayerReducer from './slice';
import { prayersActions } from './slice';
import * as prayersSelectors from './selectors';
import prayersWatcher from './sagas';

export {
  prayersActions,
  prayersSelectors,
  prayersWatcher,
};

export default prayerReducer;
