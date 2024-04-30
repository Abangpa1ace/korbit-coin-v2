import { AxiosError } from 'axios';

export interface AxiosErrorData {
  error: AxiosError;
  code: string; // "ERR_BAD_REQUEST" ..
  httpCode: number; // 404, 500 ..
  message: string;
}
