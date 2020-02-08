import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './posts';
import Users from './users';
import { Login, Register } from '../pages/auth';

const Home = () => (
  <div className="App">
    <h1>Home</h1>
  </div>
);

const NoMatch = () => (
  <div className="App">
    <h1>404</h1>
  </div>
);

const isAuthenticated = false;

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />

    <PrivateRoute path="/posts" component={Posts} />
    <PrivateRoute path="/users" component={Users} />

    <Route path="*" component={NoMatch} />
  </Switch>
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default Routes;
