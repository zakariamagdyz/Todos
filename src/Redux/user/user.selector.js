import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserData = createSelector(
  [selectUser],
  (data) => data.userData
);
