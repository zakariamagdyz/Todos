import { filterTypes } from "./filterTypes";

const INITAL_FILTER = {
  filter: "",
};

export const filterReducer = (state = INITAL_FILTER, action) => {
  switch (action.type) {
    case filterTypes.SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
