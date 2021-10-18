import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IComment } from '../../../interfaces';

export const getComments = (state: RootState) => state.comments.items;

export const isLoading = (state: RootState) => state.comments.isLoading;

export const getError = (state: RootState) => state.comments.error;

export const getCommentsByPrayerId = createSelector(
  (state: RootState, prayerId: number) => ({
    comments: getComments(state),
    prayerId,
  }),
  ({ comments, prayerId }) => comments.filter((comment: IComment) => comment.prayerId === prayerId)
);
