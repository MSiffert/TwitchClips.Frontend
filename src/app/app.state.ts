import { MostViewedClipsTable } from './store/models/most-viewed-clips-table.model';
import { ClipsFilter } from './store/models/clips-filter.action';
import { clipsFilterReducer } from './store/reducers/clips-filter.reducer';
import { mostViewedClipsTableReducer } from './store/reducers/most-viewed-clips-table.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  readonly mostViewedClipsTableState: MostViewedClipsTable;
  readonly clipsFilterState: ClipsFilter;
}

export const reducers: ActionReducerMap<AppState> = {
  mostViewedClipsTableState: mostViewedClipsTableReducer,
  clipsFilterState: clipsFilterReducer,
};
