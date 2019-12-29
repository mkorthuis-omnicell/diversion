import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from './login';
import Feature from './feature';
import Dashboard from './dashboard';
import Category from './extreme/category';
import Detail from './extreme/detail';
import Timeline from './extreme/timeline';
import Waste from './waste';
import Discrepancy from './discrepancy';
import MissingPage from './missingPage';

import { useStore } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useStore()[0];
  return (
    <Route
      {...rest}
      render={(props) => (
        loggedIn === true
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );
};

function OmniRoute() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/feature" component={Feature} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/category" component={Category} />
      <PrivateRoute path="/details" component={Detail} />
      <PrivateRoute path="/timeline" component={Timeline} />
      <PrivateRoute path="/waste" component={Waste} />
      <PrivateRoute path="/discrepancy" component={Discrepancy} />
      <Route exact path="/" component={Login} />
      <Route path="*">
        <MissingPage />
      </Route>

    </Switch>
  );
}

export default OmniRoute;
