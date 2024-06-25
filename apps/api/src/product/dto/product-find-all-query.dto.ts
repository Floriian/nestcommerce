export class ProductFindAllQueryDto {
  page?: string;
  limit?: string;
  text?: string;
  active?: boolean | 'ALL';
}
