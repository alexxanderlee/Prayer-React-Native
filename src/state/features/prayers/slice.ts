import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { columnsActions } from '../columns';
import { IPrayer } from '../../../interfaces';

export interface CreatePrayerRequestPayload {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
}

interface PrayersState {
  items: IPrayer[],
  isLoading: boolean,
  error: string,
}

const initialState: PrayersState = {
  items: [],
  isLoading: false,
  error: '',
};

const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    setPrayers: (state, action: PayloadAction<IPrayer[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addPrayer: (state, action: PayloadAction<IPrayer>) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    deletePrayerById: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(prayer => prayer.id !== action.payload);
      state.error = '';
    },
    updatePrayer: (state, action: PayloadAction<IPrayer>) => {
      state.items = state.items.map(prayer => (prayer.id === action.payload.id) ? action.payload : prayer);
      state.error = '';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getAllPrayersRequest: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    createPrayerRequest: (state, _action: PayloadAction<CreatePrayerRequestPayload>) => {
      state.isLoading = true;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(columnsActions.deleteColumnById, (state, action) => {
      state.items = state.items.filter(prayer => prayer.columnId !== action.payload);
    });
  },
});

export const prayersActions = prayersSlice.actions;

export default prayersSlice.reducer;
