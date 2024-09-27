"use client";
import { Form, Input, Button, Checkbox, Flex } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Logo from "@/components/logo";

export default async function LoginPage() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Flex vertical gap={24} style={{ maxWidth: 333, width: "100%" }}>
      <Logo width={40} height={40} title="Đăng nhập CMS" />
      <Form style={{ width: "100%" }} onFinish={onFinish}>
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
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
            <Link href="/quen-mat-khau">Quên mật khẩu?</Link>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          Bạn chưa có tài khoản?
          <Link href="/dang-ky" className="ml-1">
            Đăng ký ngay
          </Link>
        </Form.Item>
      </Form>
    </Flex>
  );
}
