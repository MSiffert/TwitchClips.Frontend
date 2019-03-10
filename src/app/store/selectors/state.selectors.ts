import { createFeatureSelector } from '@ngrx/store';
import { MostViewedClipsTable } from 'src/app/store/models/most-viewed-clips-table.model';
import { ClipsFilter } from '../models/clips-filter.action';

export const getClipsFilterState = createFeatureSelector<ClipsFilter>('clipsFilterState');
export const getMostViewedClipsTableState = createFeatureSelector<MostViewedClipsTable>('mostViewedClipsTableState');
export const getRecentClipsTableState = createFeatureSelector<MostViewedClipsTable>('recentClipsTableState');
