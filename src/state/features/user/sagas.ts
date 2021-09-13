/* eslint-disable */
import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import userActions, { LoginUserPayload, SignupUserPayload } from './actions';
import { userApi } from '../../../utils/api';

const errorLoginMessage = 'Unable to log in. Please check your email and password and try again.';

function* loginUserWorker(action: PayloadAction<LoginUserPayload>) {
  yield put(userActions.setLoading());
  try {
    const response: AxiosResponse = yield call(userApi.login, action.payload);
    if (response.status === 201) {
      const { data } = response;
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
    } else {
      yield put(userActions.setError(response.statusText));
    }
  } catch (e) {
    const error = (e as AxiosError);
    yield put(userActions.setError(error.message));
  }
}

function* signupUserWorker(action: PayloadAction<SignupUserPayload>) {
  yield put(userActions.setLoading());
  try {
    const { data }: AxiosResponse = yield call(userApi.signup, action.payload);
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
      yield put(userActions.setError('Sign up error.'));
    }
  } catch (e) {
    const error = (e as AxiosError);
    yield put(userActions.setError(error.message));
  }
}

export function* userWatcher() {
  yield takeEvery(userActions.loginUser, loginUserWorker);
  yield takeEvery(userActions.signupUser, signupUserWorker);
}