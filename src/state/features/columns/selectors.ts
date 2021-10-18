import { RootState } from '../../store';

export const getColumns = (state: RootState) => state.columns.items;

export const isLoading = (state: RootState) => state.columns.isLoading;

export const getError = (state: RootState) => state.columns.error;
