import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { All, New, Show } from '../pages/posts';

const PostsRoute = () => {
  return (
    <Switch>
      <Route path="/posts" exact component={All} />
      <Route path="/posts/new" exact component={New} />
      <Route path="/posts/:id" component={Show} />
    </Switch>
  );
};

export default PostsRoute;
