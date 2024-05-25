import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig, HttpStatusCode } from "axios";
import { ApiHttpError } from "~types/HttpError";
export const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (e) => {
    const err = e as unknown as AxiosError<ApiHttpError>;
    if (
      err.response?.status === HttpStatusCode.Unauthorized ||
      err?.response?.data?.message === "Session expired. Please login again"
    )
      window.location.href = "/auth";
    return Promise.reject(e);
  }
);

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
