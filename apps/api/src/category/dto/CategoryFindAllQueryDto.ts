export class CategoryFindAllQueryDto {
  page?: string;
  limit?: string;
  text?: string;
  active?: boolean | 'ALL';
}
