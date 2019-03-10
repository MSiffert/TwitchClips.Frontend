import { initialMostViewedClipsTable, MostViewedClipsTable } from '../models/most-viewed-clips-table.model';
import * as MostViewedClipsTableStateActions from '../actions/most-viewed-clips-table.actions';

export function mostViewedClipsTableReducer(state: MostViewedClipsTable = initialMostViewedClipsTable, action: MostViewedClipsTableStateActions.Actions) {
  switch (action.type) {
    case MostViewedClipsTableStateActions.GET_STATE:
      return { ...state };

    case MostViewedClipsTableStateActions.FETCH_CURRENT:
      return { ...state, isLoading: true };

    case MostViewedClipsTableStateActions.FETCH_NEXT:
      return { ...state, isLoading: true };

    case MostViewedClipsTableStateActions.FETCH_PREVIOUS:
      return { ...state, isLoading: true };

    case MostViewedClipsTableStateActions.CHANGE_SIZE:
      return { ...state, take: action.payload, isLoading: true };

    case MostViewedClipsTableStateActions.FETCH_COMPLETED_DUC:
      return { ...state, clips: action.payload.data, isLoading: false };

    case MostViewedClipsTableStateActions.FETCH_COMPLETED_UC:
      return { ...state, cursor: action.payload.pagination.cursor, clips: action.payload.data, isLoading: false };

    case MostViewedClipsTableStateActions.FETCH_FAILED:
      return { ...state };

    default:
      return state;
    }
}
