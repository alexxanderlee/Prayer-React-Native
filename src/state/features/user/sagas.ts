/* eslint-disable */
import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import userActions, { LoginUserPayload, SignupUserPayload } from './actions';
import { userApi } from '../../../utils/api';

const errorLoginMessage = 'Unable to log in. Please check your email and password and try again.';

const wrapper = (errorHandler: any, sagaWorker: any) => function* (action: any) {
  yield put(userActions.setLoading());
  try {
    yield call(sagaWorker, action);
  } catch (e) {
    yield call(errorHandler, e);
  }
}

function* onError(error: AxiosError) {
  if (error.response) {
    yield put(userActions.setError(error.response.statusText));
  } else {
    yield put(userActions.setError(error.message));
  }
}

function* signupUserWorker(action: PayloadAction<SignupUserPayload>) {
  const { data }: AxiosResponse = yield call(userApi.signup, action.payload);
  const payload = {
    userData: {
      id: data.id,
      name: data.name,
      email: data.email,
    },
    token: data.token,
  };
  yield put(userActions.setUser(payload));
}

function* loginUserWorker(action: PayloadAction<LoginUserPayload>) {
  const { data }: AxiosResponse = yield call(userApi.login, action.payload);
  if (data.token) {
    const payload = {
      userData: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
      token: data.token,
    };
    yield put(userActions.setUser(payload));
  } else {
    yield put(userActions.setError(errorLoginMessage));
  }
}

export function* userWatcher() {
  yield takeEvery(userActions.loginUser, wrapper(onError, loginUserWorker));
  yield takeEvery(userActions.signupUser, wrapper(onError, signupUserWorker));
}