"use client";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Flex,
  InputNumber,
  Typography,
  App,
} from "antd";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authApi } from "@/utils/api";

export default function LoginPage() {
  const router = useRouter();
  const { message } = App.useApp();
  const [loadingBtn, setLoadingBtn] = useState(false);

  const validatePhoneNumber = (rule: any, value: any) => {
    if (!value) {
      return Promise.reject("Vui lòng nhập số điện thoại");
    }
    value = "84" + value.toString();
    //định dạng số điện thoại việt nam Regex
    const regexPhoneNumber = /(84[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!regexPhoneNumber.test(value.toString())) {
      return Promise.reject("Số điện thoại không đúng định dạng");
    }
    return Promise.resolve();
  };

  const onFinish = async (values: any) => {
    try {
      setLoadingBtn(true);
      const data = await authApi.login(values.phone, values.password);
      setLoadingBtn(false);
      if (data.code != "00") {
        throw new Error("Số điện thoại hoặc mật khẩu không đúng");
      }
      message.success("Đăng nhập thành công");
      router.push("/");
    } catch (error: any) {
      setLoadingBtn(false);
      message.error(error.message);
    }
  };

  return (
    <Flex vertical gap={24} style={{ maxWidth: 333, width: "100%" }}>
      <Logo width={80} height={80} />
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Đăng nhập BitPOS
      </Typography.Title>
      <Form style={{ width: "100%" }} onFinish={onFinish}>
        <Form.Item
          key="phone"
          name="phone"
          required={true}
          rules={[{ validator: validatePhoneNumber }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Nhập số điện thoại"
            size="large"
            controls={false}
            autoComplete="on"
            addonBefore="+84"
            type="number"
            inputMode="numeric"
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
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            loading={loadingBtn}
          >
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
