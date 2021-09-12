/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces';

interface UserState {
  user: IUser | null;
  token: string | null;
  error: {} | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: IUser, token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.error = null;
    },
    logoutUser: (state) => {
      state = initialState;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export default userSlice.reducer;