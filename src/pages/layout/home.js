import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/actions';

const Home = props => {
  const { doLogout, error, loading, session } = props;
  console.log('session: ', session, loading);

  if (!session) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="App">
      {error}
      <h1>Home</h1>
      {session && (
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
          onClick={() => doLogout()}
        >
          Log out
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  session: auth.session,
  error: auth.error
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
