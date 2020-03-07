import React from "react";
import { Button, Block } from "../../components";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Register.scss";

const Register = () => {
  return (
    <div className="auth">
      <h1 className="title">Зарегистрироваться</h1>
      <p className="text">Для входа в чат, необходима регистрация</p>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!"
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                }
              })
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" text="Зарегистрироваться" />
          </Form.Item>

          <Form.Item className="auth__reg-link-wrap">
            <Link to="/login">
              <a className="auth__reg-link" href="register">
                Войти в аккаунт
              </a>
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default Register;
