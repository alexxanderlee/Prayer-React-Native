import { put, takeEvery, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { commentsActions } from './slice';
import { commentsApi } from '../../../utils/api';

function* getAllCommentsWorker() {
  const response: AxiosResponse = yield call(commentsApi.getAllComments);
  yield put(commentsActions.setComments(response.data));
}

function* createCommentWorker(action: PayloadAction<{ body: string, prayerId: number }>) {
  const { body, prayerId } = action.payload;
  const response: AxiosResponse = yield call(commentsApi.createCommentByPrayerId, { body }, prayerId);
  yield put(commentsActions.addComment(response.data)); /// ????????????????????????
}

function* deleteCommentWorker(action: PayloadAction<number>) {
  yield call(commentsApi.deleteCommentById, action.payload);
  yield put(commentsActions.deleteCommentById(action.payload));
}

function* updateCommentWorker(action: PayloadAction<{ body: string, commentId: number }>) {
  const { body, commentId } = action.payload;
  const response: AxiosResponse = yield call(commentsApi.updateCommentById, { body }, commentId);
  yield put(commentsActions.updateComment(response.data));
}

function* onError(error: AxiosError) {
  if (error.response) {
    yield put(commentsActions.setError(error.response.data.message));
  } else {
    yield put(commentsActions.setError(error.message));
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
  yield takeEvery(commentsActions.getAllCommentsRequest, sagaWrapper(onError, getAllCommentsWorker));
  yield takeEvery(commentsActions.createCommentRequest, sagaWrapper(onError, createCommentWorker));
  yield takeEvery(commentsActions.deleteCommentRequest, sagaWrapper(onError, deleteCommentWorker));
  yield takeEvery(commentsActions.updateCommentRequest, sagaWrapper(onError, updateCommentWorker));
}
