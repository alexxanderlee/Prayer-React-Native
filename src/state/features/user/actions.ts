/* eslint-disable */
import { createAction } from '@reduxjs/toolkit';
import { userSlice } from './slice';

export interface LoginUserPayload {
  email: string,
  password: string,
}

export interface SignupUserPayload {
  email: string,
  name: string,
  password: string,
}

const loginUser = createAction<LoginUserPayload>('user/login');
const signupUser = createAction<SignupUserPayload>('user/signup');

export default {
  ...userSlice.actions,
  loginUser,
  signupUser,
};