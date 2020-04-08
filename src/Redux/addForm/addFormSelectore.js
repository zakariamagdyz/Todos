import { createSelector } from "reselect";

const selectInputForm = (state) => state.addForm;

export const selectInputValue = createSelector(
  [selectInputForm],
  (addform) => addform.todoInput
);

export const selectErrorValue = createSelector(
  [selectInputForm],
  (addform) => addform.error
);
