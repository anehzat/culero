import { createSelector } from '@reduxjs/toolkit';

export const selectStatusRoot = createSelector(
    (state) => state,
    (state) => state.status,
);

export const selectAuthToken = createSelector(selectStatusRoot, (state) => state?.authToken);
export const selectUser = createSelector(selectStatusRoot, (state) => state?.user);
export const selectDummyReviewData = createSelector(selectStatusRoot, (state) => state?.dumyReviewData);
export const selectTotalDummyReviewCount = createSelector(selectStatusRoot, (state) => state?.totalDummyReviewCount);
