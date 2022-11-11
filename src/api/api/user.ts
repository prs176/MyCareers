import { SimpleUser, User } from "../../models/user";
import { LoginRequest, RegisterRequest, UserRequest } from "../request/user";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";
import { removeCookie, setCookie } from "../token/cookie";

export const getUser = async (id: number): Promise<User> => {
  const { data } = await instance.get<Response<User>>(`/user/${id}`);
  return data.response;
};

export const getUsers = async (keyword: string): Promise<SimpleUser[]> => {
  const { data } = await instance.get<Response<SimpleUser[]>>(`/user/search/${keyword}`);
  return data.response;
};

export const getMyId = async (): Promise<number> => {
  const { data } = await instance.get<Response<number>>(`/user/myid`);
  return data.response;
};

export const postLogin = async (request: LoginRequest): Promise<void> => {
  const { data } = await instance.post<Response<string>>(`/user/login`, request);
  removeCookie("token");
  setCookie("token", data.response, 1);
  return;
};

export const postRegister = async (request: RegisterRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/user/register`, request);
  return;
};

export const postGood = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/user/good/${id}`);
  return;
};

export const postNotGood = async (id: number): Promise<void> => {
  await instance.post<MessageResponse>(`/user/notgood/${id}`);
  return;
};

export const putUser = async (request: UserRequest): Promise<void> => {
  await instance.put<MessageResponse>(`/user/`, request);
  return;
};
