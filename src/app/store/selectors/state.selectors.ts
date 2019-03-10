import { createFeatureSelector } from '@ngrx/store';
import { MostViewedClipsTableState } from 'src/app/store/models/most-viewed-clips-table-state.model';

export const getMostViewedClipsTableState = createFeatureSelector<MostViewedClipsTableState>('mostViewedClipsTableState');
export const getRecentClipsTableState = createFeatureSelector<MostViewedClipsTableState>('recentClipsTableState');
