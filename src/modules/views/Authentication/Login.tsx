import * as React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import AuthenticationLayout from '../../Layouts/AuthenticationLayout';
import LoginIllustration from '../../../assets/img/loginIllustration.svg';

interface ILoginProps {
  title: string;
}

const Login = ({ title }: ILoginProps): React.ReactElement => {
  const [form] = Form.useForm();
  const onFinish = (values: unknown): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AuthenticationLayout
      title={title}
      Illustration={LoginIllustration}
      heading="Login"
      subHeading="Welcome back to the Freezar Nigeria Dashboard"
    >
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark={true}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input prefix={<UserOutlined />} type="email" placeholder="Enter your email address" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <div className="login-form-footer">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="!#">Forgot password</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </AuthenticationLayout>
  );
};

export default Login;
