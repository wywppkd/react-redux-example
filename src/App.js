import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./pages/index";
import ReduxWithHooks from "./pages/reduxWithHooks";

const App = () => {
  return (
    // 注入全局 redux state: 所有组件都可以访问
    <Provider store={store}>
      {/* <Index /> */}
      <ReduxWithHooks />
    </Provider>
  );
};

export default App;
