import React from 'react';
import { Route, Switch } from 'react-router-dom';

import All from '../pages/posts/all';
import New from '../pages/posts/new';
import Show from '../pages/posts/show';

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
