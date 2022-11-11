import { Log } from "../../models/log";
import { LogRequest } from "../request/log";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";

export const getLogs = async (recordId: number): Promise<Log[]> => {
  const { data } = await instance.get<Response<Log[]>>(`/log/${recordId}`);
  return data.response;
};

export const postLog = async (recordId: number, request: LogRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/log/${recordId}`, request);
  return;
};

export const putLog = async (id: number, request: LogRequest): Promise<void> => {
  await instance.put<MessageResponse>(`/log/${id}`, request);
  return;
};

export const deleteLog = async (id: number): Promise<void> => {
  await instance.delete<MessageResponse>(`/log/${id}`);
  return;
};
