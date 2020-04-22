import { addData } from "../Firebase/Firebase";

export const sendData = (store) => (next) => (action) => {
  if (action.type !== "ADD_NEW_TODO") return next(action);
  console.log(action.payload);
  addData("dG9LIuxgD8ZwJUgfeJFAZTDXauz2", action.payload);
  next(action);
};
