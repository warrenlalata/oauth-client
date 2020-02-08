import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { All, New, Show } from '../pages/users';

const UsersRoute = () => {
  return (
    <Switch>
      <Route path="/users" exact component={All} />
      <Route path="/users/new" exact component={New} />
      <Route path="/users/:id" component={Show} />
    </Switch>
  );
};

export default UsersRoute;
