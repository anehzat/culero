import { createSelector } from '@reduxjs/toolkit';

export const selectStatusRoot = createSelector(
    (state) => state,
    (state) => state.status,
);

export const selectLoginProvider = createSelector(selectStatusRoot, (state) => state?.loginProvider);
export const selectLoginStatus = createSelector(selectStatusRoot, (state) => state?.loginStatus);
export const selectUserId = createSelector(selectStatusRoot, (state) => state?.userId);
export const selectUserEmail = createSelector(selectStatusRoot, (state) => state?.userEmail);
export const selectUserName = createSelector(selectStatusRoot, (state) => state?.fullName);
export const selectAvatarURL = createSelector(selectStatusRoot, (state) => state?.avatarURL);
export const selectAuthToken = createSelector(selectStatusRoot, (state) => state?.authToken);
