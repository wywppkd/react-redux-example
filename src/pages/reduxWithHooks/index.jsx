import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../reducers/token";
import { saveUserId } from "../../reducers/user";

const ReduxWithHooks = () => {
  // 读取 state
  const { userReducer, tokenReducer } = useSelector((state) => state);
  // 引入 dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(saveUserId("123"))}>
        {userReducer.userId}
      </button>
      <button onClick={() => dispatch(saveToken("888888"))}>
        {tokenReducer.token}
      </button>
    </div>
  );
};

export default ReduxWithHooks;
