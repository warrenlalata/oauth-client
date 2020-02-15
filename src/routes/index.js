import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import Posts from './posts';
import Users from './users';
import Login from '../pages/auth/login';
import { Register } from '../pages/auth';

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

const Routes = props => {
  const isAuthenticated = !_isEmpty(props.session);
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <PrivateRoute
        path="/posts"
        component={Posts}
        isAuthenticated={isAuthenticated}
      />
      <PrivateRoute
        path="/users"
        component={Users}
        isAuthenticated={isAuthenticated}
      />

      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
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

const mapStateToProps = ({ auth }) => ({
  session: auth.session
});

export default connect(mapStateToProps)(Routes);
