import { ResumeRecord } from "../../models/record";
import { RecordRequest } from "../request/record";
import { MessageResponse, Response } from "../response/response";
import instance from "../server/server";

export const getRecords = async (userId: number): Promise<ResumeRecord[]> => {
  const { data } = await instance.get<Response<ResumeRecord[]>>(`/record/${userId}`);
  return data.response;
};

export const postRecord = async (request: RecordRequest): Promise<void> => {
  await instance.post<MessageResponse>(`/record`, request);
  return;
};

export const putRecord = async (id: number, request: RecordRequest): Promise<void> => {
  await instance.put<MessageResponse>(`/record/${id}`, request);
  return;
};

export const deleteRecord = async (id: number): Promise<void> => {
  await instance.delete<MessageResponse>(`/record/${id}`);
  return;
};
