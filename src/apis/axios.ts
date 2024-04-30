import { AxiosErrorData } from '@/types/api';
import axios, {
  AxiosError,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';

import queryString, { StringifiableRecord } from 'query-string';
import toast from 'react-hot-toast';

interface Params {
  config?: CreateAxiosDefaults;
}

class Axios {
  private instance;

  constructor({ config }: Params) {
    this.instance = axios.create({
      withCredentials: true,
      timeout: 15000,
      ...(config && config),
    });
    this.setInterceptors();
  }

  private setInterceptors() {
    this.instance.interceptors.request.use(
      this.requestResolved.bind(this),
      this.requestRejected.bind(this),
    );
    this.instance.interceptors.response.use(
      this.responseResolved.bind(this),
      this.responseRejected.bind(this),
    );
  }

  private requestResolved(config: InternalAxiosRequestConfig) {
    return config;
  }

  private requestRejected(error: AxiosError) {
    const { message, code, response } = error;
    toast.error('API 요청이 올바르지 않아요\n' + message);
    return Promise.reject<AxiosErrorData>({
      error,
      code,
      message,
      httpCode: response?.status,
    });
  }

  private responseResolved(response: AxiosResponse) {
    return response;
  }

  private responseRejected(error: AxiosError) {
    const { message, code, response } = error;
    toast.error('API 응답에 오류가 있어요\n' + message);
    return Promise.reject<AxiosErrorData>({
      error,
      code,
      message,
      httpCode: response?.status,
    });
  }

  get<T>(url: string, query?: StringifiableRecord) {
    return this.instance
      .get<T>(
        queryString.stringifyUrl({
          url,
          query,
        }),
      )
      .then((res) => res.data);
  }

  post<P, T>(url: string, params: P) {
    return this.instance.post<T>(url, params).then((res) => res.data);
  }

  patch<P, T>(url: string, params: P) {
    return this.instance.patch<T>(url, params).then((res) => res.data);
  }

  delete<T>(url: string) {
    return this.instance.delete<T>(url).then((res) => res.data);
  }
}

const coinGeckoAxios = new Axios({
  config: {
    baseURL: '/coingecko',
    headers: {
      'Content-Type': 'application/json',
    },
  },
});

export { coinGeckoAxios };
