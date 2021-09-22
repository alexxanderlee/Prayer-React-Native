import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { columnsActions, CreateColumnPayload, UpdateColumnPayload } from './slice';
import { columnsApi } from '../../../utils/api';

function* getAllColsWorker() {
  const response: AxiosResponse = yield call(columnsApi.getAllColumns);
  yield put(columnsActions.setColumns(response.data));
}

function* createColWorker(action: PayloadAction<CreateColumnPayload>) {
  const response: AxiosResponse = yield call(columnsApi.createColumn, action.payload);
  yield put(columnsActions.addColumn(response.data));
}

function* updateColWorker(action: PayloadAction<UpdateColumnPayload>) {
  const { title, description, columnId } = action.payload;
  const response: AxiosResponse = yield call(columnsApi.updateColumnById, { title, description }, columnId );
  yield put(columnsActions.updateColumn(response.data));
}

function* deleteColWorker(action: PayloadAction<number>) {
  yield call(columnsApi.deleteColumnById, action.payload);
  yield put(columnsActions.deleteColumnById(action.payload));
}

function* onError(error: AxiosError) {
  if (error.response) {
    yield put(columnsActions.setError(error.response.data.message));
  } else {
    yield put(columnsActions.setError(error.message));
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
  yield takeEvery(columnsActions.getAllColumnsRequest, sagaWrapper(onError, getAllColsWorker));
  yield takeEvery(columnsActions.createCololumnRequset, sagaWrapper(onError, createColWorker));
  yield takeEvery(columnsActions.updateColumnRequest, sagaWrapper(onError, updateColWorker));
  yield takeEvery(columnsActions.deleteColumnRequest, sagaWrapper(onError, deleteColWorker));
}
