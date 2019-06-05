import * as React from "react";
import "./style.css";
import { Form, Icon, Input, Button } from "antd";
import { actionCreators } from "./store";
import { connect } from "react-redux";

type P = {
  loginStatus: boolean;
  form: any;
  login: any;
  addText: any;
};

type S = {
  username: any;
  password: any;
};

class Login extends React.Component<P, S> {
  state: S = {
    username: null,
    password: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleUserName = e => {
    console.log(e.target.value);
    this.state.username = e.target.value;
  };

  handlePassword = e => {
    this.state.password = e.target.value;
  };

  render() {
    const { loginStatus } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login--Wrapper">
        <h1>RT - 亦蓁家管理系统</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                onChange={this.handleUserName}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                onChange={this.handlePassword}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Button
            type="primary"
            className="login-form-button"
            // onClick={this.handleSubmit}
            onClick={() => this.props.login(this.state.username, this.state.password)}
          >
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({
  addText(text: string) {
    console.log(text);
    dispatch(actionCreators.add(text));
  },
  login(account, pwd) {
    console.log(account, pwd);
    dispatch(actionCreators.login(account, pwd));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Form.create({ name: "normal_login" })(Login));

// export default connect(
//   mapState,
//   mapDispatch
// )(Login)
