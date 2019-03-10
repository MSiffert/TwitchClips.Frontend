import { MostViewedClipsTableState } from './store/models/most-viewed-clips-table-state.model';

export interface AppState {
  readonly mostViewedClipsTableState: MostViewedClipsTableState;
  readonly recentClipsTableState: MostViewedClipsTableState;
}
