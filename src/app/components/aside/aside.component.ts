import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Game } from 'src/app/models/game.model';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getClipsFilterState } from '../../store/selectors/state.selectors';
import * as ClipsFilterActions from '../../store/actions/clips-filter.actions';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavLeftComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'name'];
  public selection: SelectionModel<Game>;
  public games = new Observable<Game[]>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.games = this.store.select(getClipsFilterState).pipe(map(res => res.games));
    this.setInitialSelectionOnFetchComplete();
    this.store.dispatch(new ClipsFilterActions.FetchGames());
  }

  private setInitialSelectionOnFetchComplete() {
    const selection = this.store.select(getClipsFilterState);
    const subscription = selection.subscribe(clipsFilter => {
      if (clipsFilter.games.length !== 0) {
        this.selection = new SelectionModel<Game>(false, [clipsFilter.games[0]]);
        subscription.unsubscribe();
      }
    });
  }

  public applyConfiguration() {
    this.store.dispatch(new ClipsFilterActions.SetSelectedGame(this.selection.selected[0]));
  }
}
