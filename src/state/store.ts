import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { userReducer, columnsReducer, prayersReducer, commentsReducer } from './features';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'columns', 'prayers', 'comments'],
};

const userConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['error', 'loading'],
};

const columnsConfig = {
  key: 'columns',
  storage: AsyncStorage,
  blacklist: ['error', 'isLoading'],
};

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userReducer),
  columns: persistReducer(columnsConfig, columnsReducer),
  prayers: prayersReducer,
  comments: commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
   }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
