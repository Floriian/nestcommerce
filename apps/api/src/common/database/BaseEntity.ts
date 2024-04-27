import { UniqueProp } from './UniqueProp.decorator';

export class BaseEntity {
  @UniqueProp()
  name: string;
}
