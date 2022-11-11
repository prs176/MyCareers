import { AxiosError } from "axios";
import { MessageResponse } from "../api/response/response";

const handleAxiosError = async <T extends (...args: any[]) => any>(callback: T) => {
  try {
    await callback();
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response) {
      alert((axiosError.response.data as MessageResponse).message);
    }
  }
};

export default handleAxiosError;
