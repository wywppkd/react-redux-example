// action.type 常量
const SAVE = "app/token/SAVE";// 推荐: 项目名+文件名+type, 避免冲突

/** action 生成函数 */
const saveToken = function (value) {
  return {
    type: SAVE,
    value,
  };
};

/** 当前 reducer 初始化 state */
const initialState = {
  token: "初始token",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return { token: action.value };
    default:
      return state;
  }
}

export { reducer as default, saveToken };
