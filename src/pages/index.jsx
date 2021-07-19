import React from "react";
import { connect } from "react-redux";
import { saveToken } from "../reducers/token";
import { saveUserId } from "../reducers/user";

const Index = (props) => {
  return (
    <div>
      <button onClick={props.saveUserId}>{props.userId}</button>
      <button onClick={props.saveToken}>{props.token}</button>
    </div>
  );
};

// 将 redux state 映射到 props
const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.userId, // 需要通过 userReducer 访问其 state
    token: state.tokenReducer.token,
  };
};

// 将 dispatch 映射到 props
const mapDispatchToProps = (dispatch) => {
  return {
    saveToken() {
      dispatch(saveToken("fawe34qw343"));
    },
    saveUserId() {
      dispatch(saveUserId("123"));
    },
  };
};

// 连接 redux store 和当前组件
export default connect(mapStateToProps, mapDispatchToProps)(Index);
