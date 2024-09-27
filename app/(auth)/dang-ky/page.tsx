"use client";
import { Form, Input, Button, Flex } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Logo from "@/components/logo";

export default async function RegisterPage() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Flex vertical gap={24} style={{ maxWidth: 333, width: "100%" }}>
      <Logo width={40} height={40} />
      <Form
        style={{ maxWidth: 333, width: "100%" }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item name="fullName">
          <Input
            placeholder="Nhập họ và tên"
            size="large"
            autoComplete="on"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item name="email">
          <Input
            placeholder="Nhập địa chỉ email"
            size="large"
            autoComplete="on"
            prefix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            placeholder="Nhập mật khẩu"
            size="large"
            type="password"
            autoComplete="on"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item name="confirmPassword">
          <Input.Password
            placeholder="Nhập lại mật khẩu"
            size="large"
            type="password"
            autoComplete="on"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Đăng ký
          </Button>
        </Form.Item>
        <Form.Item>
          Bạn đã có tài khoản?
          <Link href="/dang-nhap" className="ml-1">
            Đăng nhập ngay
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  );
}
