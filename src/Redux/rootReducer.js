import { combineReducers } from "redux";
import { todosReducer } from "./todos/todosReducer";
import { addFormReducer } from "./addForm/addFormReducer";
import { filterReducer } from "./Filter/filterReducer";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";
import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["todosData"],
};

const rootReducer = combineReducers({
  todosData: todosReducer,
  addForm: addFormReducer,
  searchFilter: filterReducer,
  user: userReducer,
});

export default persistReducer(persistconfig, rootReducer);
