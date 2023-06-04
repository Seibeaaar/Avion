import instance from ".";
import { SignUpInfo, LoginCredentials } from "src/types/user";

export const getUser = async (id: string) => {
  const { data } = await instance.get(`/users/${id}`);
  return data;
};

export const login = async (payload: LoginCredentials) => {
  const { data } = await instance.post("/auth/login", payload);
  return data;
};

export const signUp = async (payload: SignUpInfo) => {
  const { data } = await instance.post("/users", payload);
  return data;
};
