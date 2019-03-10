import { Action } from '@ngrx/store';
import { ClipResponse } from 'src/app/models/clip-response.model';

export const FETCH_NEXT          = '[MostViewed] Fetch Next';
export const FETCH_PREVIOUS      = '[MostViewed] Fetch Previous';
export const FETCH_CURRENT       = '[MostViewed] Fetch Current';
export const FETCH_COMPLETED_UC  = '[MostViewed] Fetch Completed Update Cursor';
export const FETCH_COMPLETED_DUC = '[MostViewed] Fetch Completed Dont Update Cursor';
export const FETCH_FAILED        = '[MostViewed] Fetch Failed';

export const CHANGE_SIZE         = '[MostViewed] Change Size';

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

export type Actions = FetchCurrent | FetchNext | FetchPrevious | FetchCompletedDuc | FetchCompletedUc | FetchFailed | ChangeSize;
