import { LogRequest } from "../request/log";
import { MessageResponse } from "../response/response";
import instance from "../server/server";

export const postLog = async (recordId: number, request: LogRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/log`, request);
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
