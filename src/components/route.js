import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Login from './login';
import Dashboard from './dashboard/index';
import Category from './category/index';
import Detail from './detail/index';

function OmniRoute() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/details">
        <Detail />
      </Route>
    </Switch>
  );
}

export default OmniRoute;
