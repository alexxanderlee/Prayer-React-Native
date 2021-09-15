import { RootState } from '../../store';

export const getUserData = (state: RootState) => state.user.userData;

export const getToken = (state: RootState) => state.user.token;

export const getError = (state: RootState) => state.user.error;

export const isLoading = (state: RootState) => state.user.loading;
