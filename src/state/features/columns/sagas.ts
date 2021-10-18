import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { columnsActions, CreateColumnPayload } from './slice';
import { columnsApi } from '../../../utils/api';
import { IColumn } from '../../../interfaces';

function* getAllColsWorker() {
  const response: AxiosResponse = yield call(columnsApi.getAllColumns);
  yield put(columnsActions.setColumns(response.data));
}

function* createColWorker(action: PayloadAction<CreateColumnPayload>) {
  const response: AxiosResponse = yield call(columnsApi.createColumn, action.payload);
  yield put(columnsActions.addColumn(response.data));
}

function* updateColWorker(action: PayloadAction<IColumn>) {
  const { title, description, id } = action.payload;
  yield call(columnsApi.updateColumnById, { title, description }, id );
}

function* deleteColWorker(action: PayloadAction<number>) {
  yield call(columnsApi.deleteColumnById, action.payload);
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
  yield takeEvery(columnsActions.createColumnRequset, sagaWrapper(onError, createColWorker));
  yield takeEvery(columnsActions.updateColumn, sagaWrapper(onError, updateColWorker));
  yield takeEvery(columnsActions.deleteColumnById, sagaWrapper(onError, deleteColWorker));
}
