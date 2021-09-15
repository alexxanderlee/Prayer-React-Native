import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces';

interface UserState {
  userData: IUser | null;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  userData: null,
  token: '',
  loading: false,
  error: '',
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = '';
    },
    logoutUser: (state) => {
      state.userData = null;
      state.token = '';
    },
    clearError: (state) => {
      state.error = '';
    }
  },
});

export default userSlice.reducer;