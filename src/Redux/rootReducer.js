import { combineReducers } from "redux";
import { todosReducer } from "./todos/todosReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["todosData"],
};

const rootReducer = combineReducers({
  todosData: todosReducer,
});

export default persistReducer(persistconfig, rootReducer);
