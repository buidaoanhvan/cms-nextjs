"use server";

import { API_CALL } from "@/configs";

//call api login
export const login = async (phone: string, password: string) => {
  const response = await fetch(API_CALL.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: phone, password }),
  });
  //bắt lỗi http
  if (response.status !== 201) {
    throw new Error("Đăng nhập thất bại");
  }
  //bắt lỗi error code
  const data = await response.json();
  return data;
};

//call api register
export const register = async (username: string) => {
  const response = await fetch(API_CALL.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  //bắt lỗi http
  if (response.status !== 201) {
    throw new Error("Lỗi khi đăng ký");
  }
  //bắt lỗi error code
  const data = await response.json();
  if (data.code == "01") {
    throw new Error("Số điện thoại đã được đăng kí");
  }
  return data;
};

//call api init password
export const initPassword = async (
  username: string,
  otp: string,
  password: string,
  confirmPassword: string
) => {
  const response = await fetch(API_CALL.INIT_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      otp,
      pass: password,
      confirm_pass: confirmPassword,
    }),
  });
  //bắt lỗi http
  if (response.status !== 201) {
    throw new Error("Lỗi khi khởi tạo mật khẩu");
  }
  const data = await response.json();
  return data;
};
