import { Clip } from './clip.model';
import { Pagination } from './pagination.model';

export class ClipResponse  {
  data?: Clip[] | undefined;
  pagination?: Pagination | undefined;
}
