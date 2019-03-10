import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as ClipsFilterActions from '../actions/clips-filter.actions';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { GameProviderService } from 'src/app/services/game-provider.service';

@Injectable()
export class FetchGamesEffect {
    constructor(private gameProviderService: GameProviderService, private actions$: Actions, private store: Store<any>) { }

    @Effect()
    load = this.actions$.pipe(ofType(ClipsFilterActions.FETCH_GAMES),
        switchMap(state => {
            return from(this.gameProviderService.getGames().pipe(
                map(apiResult => new ClipsFilterActions.FetchGamesComplete(apiResult)),
                catchError(error => of(new ClipsFilterActions.FetchGamesFailed(error)))
            ));
        })
    );
}
