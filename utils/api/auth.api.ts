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
  const data = await response.json();
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
  const data = await response.json();
  return data;
};
