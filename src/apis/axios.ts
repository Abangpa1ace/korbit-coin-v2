import axios, {
  AxiosError,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

import qs, { StringifiableRecord } from "query-string";

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
      this.requestRejected.bind(this)
    );
    this.instance.interceptors.response.use(
      this.responseResolved.bind(this),
      this.responseRejected.bind(this)
    );
  }

  private requestResolved(config: InternalAxiosRequestConfig) {
    return config;
  }

  private requestRejected(error: AxiosError) {
    const { message, status } = error;
    return Promise.reject({
      error,
      status,
      message,
    });
  }

  private responseResolved(response: AxiosResponse) {
    return response;
  }

  private responseRejected(error: AxiosError) {
    const { message, status } = error;
    return Promise.reject({
      error,
      status,
      message,
    });
  }

  get<T>(url: string, query?: StringifiableRecord) {
    return this.instance
      .get<T>(
        qs.stringifyUrl({
          url,
          query,
        })
      )
      .then((res) => res.data);
  }
}

const coinGeckoAxios = new Axios({
  config: {
    baseURL: "/coingecko",
    headers: {
      "Content-Type": "application/json",
    },
  },
});

export { coinGeckoAxios };
