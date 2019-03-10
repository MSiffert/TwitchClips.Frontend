import { ClipsFilter, initialClipsFilter } from '../models/clips-filter.action';
import * as ClipsFilterActions from '../actions/clips-filter.actions';

export function clipsFilterReducer(state: ClipsFilter = initialClipsFilter, action: ClipsFilterActions.Actions) {
  switch (action.type) {
    case ClipsFilterActions.FETCH_GAMES:
      return { ...state };

    case ClipsFilterActions.FETCH_GAMES_COMPLETE:
      return { ...state, games: action.payload.data, selectedGame: action.payload.data[0] };

    case ClipsFilterActions.FETCH_GAMES_FAILED:
      return { ...state };

    case ClipsFilterActions.SET_SELECTED_GAME:
      return { ...state, selectedGame: action.payload, streamerId: null };

    case ClipsFilterActions.CHANGE_STREAMER:
      return { ...state, gameId: null, streamerId: action.payload };

    default:
      return state;
  }
}
