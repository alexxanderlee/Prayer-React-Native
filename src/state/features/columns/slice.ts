import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn } from '../../../interfaces';

export interface CreateColumnPayload {
  title: string;
  description: string;
}

interface ColumnsState {
  items: IColumn[];
  isLoading: boolean;
  error: string;
}

const initialState: ColumnsState = {
  items: [],
  isLoading: false,
  error: '',
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<IColumn[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addColumn: (state, action: PayloadAction<IColumn>) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    deleteColumnById: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(column => column.id !== action.payload);
      state.isLoading = false;
    },
    updateColumn: (state, action: PayloadAction<IColumn>) => {
      state.items = state.items.map(column => (column.id === action.payload.id) ? action.payload : column);
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getAllColumnsRequest: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    createColumnRequset: (state, _action: PayloadAction<CreateColumnPayload>) => {
      state.isLoading = true;
      state.error = '';
    },
  },
});

export const columnsActions = columnsSlice.actions;

export default columnsSlice.reducer;
