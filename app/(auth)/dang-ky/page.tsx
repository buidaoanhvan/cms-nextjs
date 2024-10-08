"use client";
import { useState } from "react";
import {
  Form,
  InputNumber,
  Button,
  Flex,
  Steps,
  Input,
  App,
  Typography,
} from "antd";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { authApi } from "@/utils/api";

export default function RegisterPage() {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
  const { message } = App.useApp();
  const router = useRouter();
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

  const validatePassword = (rule: any, value: any) => {
    if (!value) {
      return Promise.reject("Vui lòng nhập mật khẩu");
    }
    if (value.length < 8) {
      return Promise.reject("Mật khẩu phải có ít nhất 8 ký tự");
    }
    //có chữ hoa, chữ thường, số và ký tự đặc biệt
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(value.toString())) {
      return Promise.reject(
        "Mật khẩu phải có chữ hoa, chữ thường, số và ký tự đặc biệt"
      );
    }
    return Promise.resolve();
  };

  const validateConfirmPassword = (rule: any, value: any) => {
    const password = form.getFieldValue("password");
    if (value !== password) {
      return Promise.reject("Mật khẩu không khớp");
    }
    return Promise.resolve();
  };

  const validateOTP = (rule: any, value: any) => {
    if (!value) {
      return Promise.reject("Vui lòng nhập mã xác thực OTP");
    }
    return Promise.resolve();
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      name: "phone",
      title: "Đăng ký",
      content: (
        <Form.Item
          key="phone"
          name="phone"
          label="Số điện thoại đăng ký:"
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
      ),
      onFinish: async (values: any) => {
        try {
          setLoadingBtn(true);
          const data = await authApi.register(values.phone);
          if (data.code != "00") {
            throw new Error("Số điện thoại không hợp lệ");
          }
          message.success("OTP đã được gửi đến số điện thoại 0" + values.phone);
          setLoadingBtn(false);
          next();
        } catch (error: any) {
          setLoadingBtn(false);
          message.error(error.message);
        }
      },
    },
    {
      name: "otp",
      title: "Xác thực OTP",
      content: (
        <>
          <Form.Item
            key="password"
            name="password"
            label="Tạo mật khẩu:"
            required={true}
            rules={[{ validator: validatePassword }]}
          >
            <Input.Password
              size="large"
              style={{ width: "100%" }}
              placeholder="Nhập mật khẩu"
              autoComplete="on"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            key="re-password"
            name="re-password"
            label="Nhập lại mật khẩu:"
            required={true}
            rules={[{ validator: validateConfirmPassword }]}
          >
            <Input.Password
              size="large"
              style={{ width: "100%" }}
              placeholder="Nhập lại mật khẩu"
              autoComplete="on"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            key="otp"
            name="otp"
            label="Nhập mã xác thực OTP:"
            required={true}
            rules={[{ validator: validateOTP }]}
          >
            <Input.OTP
              formatter={(str) => str.toUpperCase()}
              length={4}
              size="large"
              style={{ width: "100%" }}
              type="number"
              inputMode="numeric"
            />
          </Form.Item>
        </>
      ),
      onFinish: async (values: any) => {
        try {
          setLoadingBtn(true);
          const phone = form.getFieldValue("phone");
          const data = await authApi.initPassword(
            phone,
            values.otp,
            values.password,
            values["re-password"]
          );
          setLoadingBtn(false);
          if (data.code != "00") {
            throw new Error("Xác thực OTP thất bại");
          }
          message.success("Đăng ký thành công");
          router.push("/dang-nhap");
        } catch (error: any) {
          setLoadingBtn(false);
          message.error(error.message);
        }
      },
    },
  ];
  return (
    <Flex vertical gap={24} style={{ maxWidth: 333, width: "100%" }}>
      <Logo width={80} height={80} />
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Đăng ký BitPOS
      </Typography.Title>
      <Steps
        current={current}
        size="small"
        direction="horizontal"
        labelPlacement="vertical"
        responsive={false}
      >
        {steps.map((step) => (
          <Steps.Step key={step.name} title={step.title} />
        ))}
      </Steps>
      <Form
        layout="vertical"
        form={form}
        style={{ maxWidth: 333, width: "100%" }}
        onFinish={steps[current].onFinish}
        autoComplete="on"
      >
        {steps[current].content}
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            loading={loadingBtn}
          >
            Tiếp tục
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
