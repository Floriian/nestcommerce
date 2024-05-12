export interface ApiHttpError {
  error: string;
  message: string;
  statusCode: number;
}

export interface HttpError {
  status: number;
  data: ApiHttpError;
}
