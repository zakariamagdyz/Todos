import { filterTypes } from "./filterTypes";

export const setFilter = (value) => ({
  type: filterTypes.SET_FILTER,
  payload: value,
});
