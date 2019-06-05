import * as React from "react";

import { Route, Switch } from "react-router-dom";

// 引入页面
import Home from "./pages/home";
import Page from "./pages/page";
import Counter from './pages/page/counter';
import Login from './pages/login';

// 路由
const getRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route path="/page" component={Page} />
    <Route path="/counter" component={Counter} />
  </Switch>
);

export default getRouter;
