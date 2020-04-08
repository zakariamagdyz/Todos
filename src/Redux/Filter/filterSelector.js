import { createSelector } from "reselect";

const selectFilter = (state) => state.searchFilter;

export const selectFilterValue = createSelector(
  [selectFilter],
  (value) => value.filter
);
