import React from "react";
import { Button, Block } from "../../components";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="auth">
      <h1 className="title">Войти в аккаунт</h1>
      <p className="text">Пожалуйста, войдите в свой аккаунт</p>
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
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" text="Войти в аккаунт" />
          </Form.Item>
          <Form.Item className="auth__reg-link-wrap">
            <Link to="/register">
              <a className="auth__reg-link" href="register">
                Зарегистрироваться
              </a>
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default Auth;
