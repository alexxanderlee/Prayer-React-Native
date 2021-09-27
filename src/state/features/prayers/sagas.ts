import { put, takeEvery, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { prayersActions } from '../prayers';
import { AxiosResponse, AxiosError } from 'axios';
import { prayersApi } from '../../../utils/api';
import { CreatePrayerRequestPayload, UpdatePrayerRequestPayload } from './slice';

function* getAllPrayersWorker() {
  const response: AxiosResponse = yield call(prayersApi.getAllPrayers);
  yield put(prayersActions.setPrayers(response.data));
}

function* createPrayerWorker(action: PayloadAction<CreatePrayerRequestPayload>) {
  const { title, description, checked, columnId } = action.payload;
  const response: AxiosResponse = yield call(prayersApi.createPrayerByColumnId, { title, description, checked }, columnId );
  yield put(prayersActions.addPrayer(response.data));
}

function* deletePrayerWorker(action: PayloadAction<number>) {
  yield call(prayersApi.deletePrayerById, action.payload);
  yield put(prayersActions.deletePrayerById(action.payload));
}

function * updatePrayerWorker(action: PayloadAction<UpdatePrayerRequestPayload>) {
  const { id, title, description, checked } = action.payload;
  const response: AxiosResponse = yield call(prayersApi.updatePrayerById, { title, description, checked }, id);
  yield put(prayersActions.updatePrayer(response.data));
}

function* onError(error: AxiosError) {
  if (error.response) {
    yield put(prayersActions.setError(error.response.data.message));
  } else {
    yield put(prayersActions.setError(error.message));
  }
}

const sagaWrapper = (
  errorHandler: (error: AxiosError) => void,
  sagaWorker: (action: PayloadAction<any>) => void,
) => function* (action: PayloadAction<any>) {
  try {
    yield call(sagaWorker, action);
  } catch (error) {
    yield call(errorHandler, error as AxiosError);
  }
};

export default function* () {
  yield takeEvery(prayersActions.getAllPrayersRequest, sagaWrapper(onError, getAllPrayersWorker));
  yield takeEvery(prayersActions.createPrayerRequest, sagaWrapper(onError, createPrayerWorker));
  yield takeEvery(prayersActions.deletePrayerRequset, sagaWrapper(onError, deletePrayerWorker));
  yield takeEvery(prayersActions.updatePrayerRequest, sagaWrapper(onError, updatePrayerWorker));
}
