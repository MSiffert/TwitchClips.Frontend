import { MostViewedClipsTable } from './store/models/most-viewed-clips-table.model';
import { ClipsFilter } from './store/models/clips-filter.action';

export interface AppState {
  readonly clipsFilterState: ClipsFilter;
  readonly mostViewedClipsTableState: MostViewedClipsTable;
  readonly recentClipsTableState: MostViewedClipsTable;
}
