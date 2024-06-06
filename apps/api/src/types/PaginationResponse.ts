export interface PaginationResponse<T> {
  pages: number;
  data: T;
  page: number;
}
