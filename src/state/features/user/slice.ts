/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces';

interface UserState {
  userData: IUser | null;
  token: string | null;
  loading: boolean;
  error: {} | null;
}

const initialState: UserState = {
  userData: null,
  token: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ userData: IUser, token: string }>) => {
      const { userData, token } = action.payload;
      state.userData = userData;
      state.token = token;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    logoutUser: (state) => {
      state.userData = null;
      state.token = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export default userSlice.reducer;