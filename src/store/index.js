import { combineReducers, createStore } from "redux";
import userReducer from "../reducers/user";
import tokenReducer from "../reducers/token";

// 合并reducer
const rootReducer = combineReducers({
  userReducer,
  tokenReducer,
});

const store = createStore(
  rootReducer,
  // 创建store对象的参数中放如下的一行代码
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
