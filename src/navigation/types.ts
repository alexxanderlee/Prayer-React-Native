import { NavigatorScreenParams } from '@react-navigation/native';
import { IColumn, IPrayer } from '../interfaces';

export type RootNavParamsList = {
  Auth: NavigatorScreenParams<AuthNavParamsList>;
  App: NavigatorScreenParams<AppNavParamsList>;
};

export type AppNavParamsList = {
  Desk: undefined;
  PrayersList: { column: IColumn };
  PrayerDetails: { prayer: IPrayer };
  UserModal: undefined;
};

export type AuthNavParamsList = {
  Login: undefined;
  Signup: undefined;
};

export type PrayersListNavParamsList = {
  MyPrayers: undefined;
  Subscribed: undefined;
};
