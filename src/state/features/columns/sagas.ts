import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { columnsActions } from './slice';
import { columnsApi } from '../../../utils/api';

function* getAllColsWorker() {
  const response: AxiosResponse = yield call(columnsApi.getAllColumns);
  if (response.status === 200) {
    yield put(columnsActions.setColumns(response.data));
  }
}

function* createColWorker(action: PayloadAction<{ title: string, description: string }>) {
  const response: AxiosResponse = yield call(columnsApi.createColumn, action.payload);
  if (response.status === 201) {
    yield put(columnsActions.addColumn(response.data));
  }
}

function* updateColWorker(action: PayloadAction<{ title: string, description: string, columnId: number }>) {
  const { title, description, columnId } = action.payload;
  const response: AxiosResponse = yield call(columnsApi.updateColumnById, { title, description }, columnId );
  if (response.status === 200) {
    yield put(columnsActions.updateColumn(response.data));
  }
}

function* deleteColWorker(action: PayloadAction<number>) {
  const response: AxiosResponse = yield call(columnsApi.deleteColumnById, action.payload);
  if (response.status === 200) {
    yield put(columnsActions.deleteColumnById(action.payload));
  }
}

function* onError(error: AxiosError) {
  if (error.response) {
    yield put(columnsActions.setError(error.response.data.message));
  } else {
    yield put(columnsActions.setError(error.message));
  }
}

const sagaWrapper = (errorHandler: any, sagaWorker: any) => function* (action: any) {
  try {
    yield call(sagaWorker, action);
  } catch (error) {
    yield call(errorHandler, error);
  }
};

export default function* () {
  yield takeEvery(columnsActions.fetchGetAllCols, sagaWrapper(onError, getAllColsWorker));
  yield takeEvery(columnsActions.fetchCreateCol, sagaWrapper(onError, createColWorker));
  yield takeEvery(columnsActions.fetchUpdateCol, sagaWrapper(onError, updateColWorker));
  yield takeEvery(columnsActions.fetchDeleteCol, sagaWrapper(onError, deleteColWorker));
}
