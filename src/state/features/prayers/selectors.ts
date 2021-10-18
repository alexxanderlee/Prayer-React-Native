import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IPrayer } from '../../../interfaces';

export const isLodaing = (state: RootState) => state.prayers.isLoading;

export const getError = (state: RootState) => state.prayers.error;

export const getPrayersByColumnId = createSelector(
  (state: RootState, columnId: number) => ({ state, columnId}),
  ({ state, columnId }) => state.prayers.items.filter((prayer: IPrayer) => prayer.columnId === columnId)
);

export const getCheckedPrayersByColumnId = createSelector(
  getPrayersByColumnId,
  (prayers: IPrayer[]) => prayers.filter(prayer => prayer.checked)
);

export const getUncheckedPrayersByColumnId = createSelector(
  getPrayersByColumnId,
  (prayers: IPrayer[]) => prayers.filter(prayer => !prayer.checked)
);
