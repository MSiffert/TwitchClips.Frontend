import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import * as MostViewedClipsTableActions from '../actions/mostViewedClipsTableState.actions';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { ClipsProviderService } from 'src/app/services/clips-provider.service';
import { getMostViewedClipsTableState } from '../selectors/state.selectors';

@Injectable()
export class FetchCurrentEffect {
    constructor(private clipProviderService: ClipsProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(MostViewedClipsTableActions.FETCH_CURRENT),
        withLatestFrom(this.store.select(getMostViewedClipsTableState)),
        map(([action, state]) => state),
        switchMap((state) => {
            return from(this.clipProviderService.getClips(state.gameId, state.take).pipe(
                map(apiResult => new MostViewedClipsTableActions.FetchCompletedUc(apiResult)),
                catchError(error => of(new MostViewedClipsTableActions.FetchFailed(error)))
            ));
        })
    );
}

@Injectable()
export class FetchNextEffect {
    constructor(private clipProviderService: ClipsProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(MostViewedClipsTableActions.FETCH_NEXT),
        withLatestFrom(this.store.select(getMostViewedClipsTableState)),
        map(([action, state]) => state),
        switchMap((state) => {
            return from(this.clipProviderService.getNextClips(state.gameId, state.cursor, state.take).pipe(
                map(apiResult => new MostViewedClipsTableActions.FetchCompletedUc(apiResult)),
                catchError(error => of(new MostViewedClipsTableActions.FetchFailed(error)))
            ));
        })
    );
}

@Injectable()
export class FetchPreviousEffect {
    constructor(private clipProviderService: ClipsProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(MostViewedClipsTableActions.FETCH_PREVIOUS),
        withLatestFrom(this.store.select(getMostViewedClipsTableState)),
        map(([action, state]) => state),
        switchMap((state) => {
            return from(this.clipProviderService.getPreviousClips(state.gameId, state.cursor, state.take).pipe(
                map(apiResult => new MostViewedClipsTableActions.FetchCompletedUc(apiResult)),
                catchError(error => of(new MostViewedClipsTableActions.FetchFailed(error)))
            ));
        })
    );
}

@Injectable()
export class ChangeGameEffect {
    constructor(private clipProviderService: ClipsProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(MostViewedClipsTableActions.CHANGE_GAME),
        withLatestFrom(this.store.select(getMostViewedClipsTableState)),
        map(([action, state]) => state),
        switchMap((state) => {
            return from(this.clipProviderService.getClips(state.gameId, state.take).pipe(
                map(apiResult => new MostViewedClipsTableActions.FetchCompletedUc(apiResult)),
                catchError(error => of(new MostViewedClipsTableActions.FetchFailed(error)))
            ));
        })
    );
}

@Injectable()
export class ChangeSizeEffect {
    constructor(private clipProviderService: ClipsProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(MostViewedClipsTableActions.CHANGE_SIZE),
        withLatestFrom(this.store.select(getMostViewedClipsTableState)),
        map(([action, state]) => state),
        switchMap((state) => {
            return from(this.clipProviderService.getNextClips(state.gameId, state.cursor, state.take).pipe(
                map(apiResult => new MostViewedClipsTableActions.FetchCompletedDuc(apiResult)),
                catchError(error => of(new MostViewedClipsTableActions.FetchFailed(error)))
            ));
        })
    );
}
