/* eslint-disable */
import { NavigatorScreenParams } from '@react-navigation/native';
import { IColumn } from '../interfaces';

export type AppNavParamsList = {
  Desk: undefined;
  PrayersList: { column: IColumn };
};

export type AuthNavParamsList = {
  Login: undefined;
  Signup: undefined;
};

export type RootNavParamsList = {
  Auth: NavigatorScreenParams<AuthNavParamsList>;
  App: NavigatorScreenParams<AppNavParamsList>;
};