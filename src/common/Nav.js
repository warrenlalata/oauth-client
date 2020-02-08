import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/posts/1">Post 1</Link>
      </li>
      <li>
        <Link to="/posts/new">New Post</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/users/1">User 1</Link>
      </li>
      <li>
        <Link to="/users/new">New User</Link>
      </li>
      <li>
        <Link to="/gibberish">404</Link>
      </li>
    </ul>
  </div>
);

export { Nav };
