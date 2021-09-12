/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  name: string | null;
  email: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    logoutUser: (state) => {
      state = initialState;
    },
  },
});

export default userSlice.reducer;