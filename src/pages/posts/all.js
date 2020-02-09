import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions';

// eslint-disable-next-line react/prefer-stateless-function
class All extends Component {
  componentDidMount() {
    const { doFetchPosts } = this.props;
    doFetchPosts();
  }

  render() {
    const { loading, error, posts } = this.props;
    if (loading) return 'loading...';
    return (
      <div>
        {error && error}
        <h1>List of Posts</h1>
        <ul>
          {posts && posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  loading: posts.loading,
  posts: posts.posts,
  error: posts.error
});

const mapDispatchToProps = dispatch => ({
  doFetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(All);
