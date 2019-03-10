import { Action } from '@ngrx/store';
import { ClipResponse } from 'src/app/models/clip-response.model';
import { MostViewedClipsTable } from 'src/app/store/models/most-viewed-clips-table.model';

export const GET_STATE           = '[MostViewed] Get State';

export const FETCH_NEXT          = '[MostViewed] Fetch Next';
export const FETCH_PREVIOUS      = '[MostViewed] Fetch Previous';
export const FETCH_CURRENT       = '[MostViewed] Fetch Current';
export const FETCH_COMPLETED_UC  = '[MostViewed] Fetch Completed Update Cursor';
export const FETCH_COMPLETED_DUC = '[MostViewed] Fetch Completed Dont Update Cursor';
export const FETCH_FAILED        = '[MostViewed] Fetch Failed';

export const CHANGE_SIZE         = '[MostViewed] Change Size';

export class GetState implements Action {
  public readonly type = GET_STATE;
  constructor(public payload: MostViewedClipsTable) {}
}

export class FetchCurrent implements Action {
  public readonly type = FETCH_CURRENT;
  constructor() { }
}

export class FetchNext implements Action {
  public readonly type = FETCH_NEXT;
  constructor() {}
}

export class FetchPrevious implements Action {
  public readonly type = FETCH_PREVIOUS;
  constructor() {}
}

export class FetchCompletedDuc implements Action {
  public readonly type = FETCH_COMPLETED_DUC;
  constructor(public payload: ClipResponse) {}
}

export class FetchCompletedUc implements Action {
  public readonly type = FETCH_COMPLETED_UC;
  constructor(public payload: ClipResponse) {}
}

export class FetchFailed implements Action {
  public readonly type = FETCH_FAILED;
  constructor(public payload: string) {}
}

export class ChangeSize implements Action {
  public readonly type = CHANGE_SIZE;
  constructor(public payload: number) {}
}

export type Actions = GetState | FetchCurrent | FetchNext | FetchPrevious | FetchCompletedDuc |
                      FetchCompletedUc | FetchFailed | ChangeSize;
