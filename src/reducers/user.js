// action.type 常量
const SAVE = "app/user/SAVE";

/** action 生成函数 */
const saveUserId = (value) => {
  return {
    type: SAVE,
    value,
  };
};

/** 当前 reducer 初始化 state */
const initialState = {
  userId: "初始ID",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return { userId: action.value };
    default:
      return state;
  }
}

export { reducer as default, saveUserId };
