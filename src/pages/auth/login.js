import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, doLogin } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values;
        // console.log('Received values of form: ', values);
        doLogin({ email, password });
      }
    });
  };

  render() {
    const { error, form, loading, session } = this.props;
    const { getFieldDecorator } = form;

    if (session) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {error}
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
            initialValue: 'xrussel@example.com'
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email Address"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
            initialValue: 'password'
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Link to="/forgot" className="login-form-forgot">
            Forgot Password
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
);

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  loading: auth.loading,
  session: auth.session
});

const mapDispatchToProps = dispatch => ({
  doLogin: credentials => dispatch(login(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
