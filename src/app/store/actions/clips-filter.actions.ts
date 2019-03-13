import { Action } from '@ngrx/store';
import { GameResponse } from 'src/app/models/game-response.model';
import { Game } from 'src/app/models/game.model';
import { User } from 'src/app/models/users.model';

export const FETCH_GAMES              = '[ClipFilter] Fetch Games';
export const FETCH_GAMES_COMPLETE     = '[ClipFilter] Fetch Games Complete';
export const FETCH_GAMES_FAILED       = '[ClipFilter] Fetch Games Failed';
export const SET_SELECTED_GAME        = '[ClipFilter] Set Game';
export const SET_SELECTED_USER        = '[ClipFilter] Set User';

export class FetchGames implements Action {
  public readonly type = FETCH_GAMES;
  constructor() {}
}

export class FetchGamesComplete implements Action {
  public readonly type = FETCH_GAMES_COMPLETE;
  constructor(public payload: GameResponse) {}
}

export class FetchGamesFailed implements Action {
  public readonly type = FETCH_GAMES_FAILED;
  constructor(public payload: string) {}
}

export class SetSelectedGame implements Action {
  public readonly type = SET_SELECTED_GAME;
  constructor(public payload: Game) {}
}

export class SetSelectedUser implements Action {
  public readonly type = SET_SELECTED_USER;
  constructor(public payload: User) {}
}

export type Actions = FetchGames | FetchGamesComplete | FetchGamesFailed | SetSelectedGame | SetSelectedUser;
