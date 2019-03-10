import { initialMostViewedClipsTableState, MostViewedClipsTableState } from '../models/most-viewed-clips-table-state.model';
import * as MostViewedClipsTableStateActions from '../actions/mostViewedClipsTableState.actions';

export function mostViewedClipsTableStateReducer(state: MostViewedClipsTableState = initialMostViewedClipsTableState, action: MostViewedClipsTableStateActions.Actions) {
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
      console.log(action.payload);
      return { ...state, take: action.payload, isLoading: true };

    case MostViewedClipsTableStateActions.CHANGE_GAME:
      return { ...state, gameId: action.payload, isLoading: true };

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
