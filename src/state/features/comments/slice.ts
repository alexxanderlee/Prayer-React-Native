import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from '../../../interfaces';
import { prayersActions } from '../prayers';

interface CommetnsState {
  items: IComment[],
  isLoading: boolean,
  error: string,
}

const initialState: CommetnsState = {
  items: [],
  isLoading: false,
  error: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    deleteCommentById: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(comment => (comment.id !== action.payload));
      state.isLoading = false;
    },
    updateComment: (state, action: PayloadAction<IComment>) => {
      state.items = state.items.map(comment => (comment.id === action.payload.id) ? action.payload : comment);
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getAllCommentsRequest: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    createCommentRequest: (state, _action: PayloadAction<{ body: string, prayerId: number }>) => {
      state.isLoading = true;
      state.error = '';
    },
    deleteCommentRequest: (state, _action: PayloadAction<number>) => {
      state.isLoading = true;
      state.error = '';
    },
    updateCommentRequest: (state, _action: PayloadAction<{ body: string, commentId: number }>) => {
      state.isLoading = true;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(prayersActions.deletePrayerById, (state, action) => {
      state.items = state.items.filter(comment => (comment.prayerId !== action.payload));
    });
  },
});

export const commentsActions = commentsSlice.actions;

export default commentsSlice.reducer;
