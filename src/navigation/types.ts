/* eslint-disable */
import { NavigatorScreenParams } from '@react-navigation/native';
import { IColumn, IPrayer } from '../interfaces';

export type AppNavParamsList = {
  Desk: undefined;
  PrayersList: { column: IColumn };
  PrayerDetails: { prayer: IPrayer };
};

export type AuthNavParamsList = {
  Login: undefined;
  Signup: undefined;
};

export type RootNavParamsList = {
  Auth: NavigatorScreenParams<AuthNavParamsList>;
  App: NavigatorScreenParams<AppNavParamsList>;
};