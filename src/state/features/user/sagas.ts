/* eslint-disable */
import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import userActions, { LoginUserPayload, SignupUserPayload } from './actions';
import { userApi } from '../../../utils/api';

function* loginUserWorker(action: PayloadAction<LoginUserPayload>) {
  try {
    const { data }: AxiosResponse = yield call(userApi.login, action.payload);
    const payload = {
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
      token: data.token,
    };
    yield put(userActions.setUser(payload));
  }
  catch (e) {
    const error = (e as AxiosError);
    yield put(userActions.setError(error))
  }
}

function* signupUserWorker(action: PayloadAction<SignupUserPayload>) {
  try {
    const { data }: AxiosResponse = yield call(userApi.signup, action.payload);
    const payload = {
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
      token: data.token,
    };
    yield put(userActions.setUser(payload));
  }
  catch (e) {
    const error = (e as AxiosError);
    yield put(userActions.setError(error))
  }
}

export function* userWatcher() {
  yield takeEvery(userActions.loginUser, loginUserWorker);
  yield takeEvery(userActions.signupUser, signupUserWorker);
}