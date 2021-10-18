import columnsReducer, { columnsActions }  from './slice';
import * as columnsSelectors from './selectors';
import columnsWatcher from './sagas';

export {
  columnsActions,
  columnsSelectors,
  columnsWatcher,
};

export default columnsReducer;
