import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Game } from 'src/app/models/game.model';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as MostViewedClipsTableActions from '../../store/actions/most-viewed-clips-table.actions';
import { getClipsFilterState } from '../../store/selectors/state.selectors';
import * as ClipsFilterActions from '../../store/actions/clips-filter.actions';
import { ClipsFilter } from 'src/app/store/models/clips-filter.action';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavLeftComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'name'];
  public selection = new SelectionModel<Game>(false, []);
  public games = new MatTableDataSource<Game>();
  private state: Observable<ClipsFilter>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.state = this.store.select(getClipsFilterState);
    this.state.subscribe(res => {
      console.log(res);
      if (res != null && res.games.length !== 0) {
        console.log('dispatch');
        this.store.dispatch(new MostViewedClipsTableActions.FetchCurrent());
      }
    });

    this.store.dispatch(new ClipsFilterActions.FetchGames());
  }

  public applyConfiguration() {
    const selectedGameId = this.selection.selected[0].id;
    this.store.dispatch(new ClipsFilterActions.SetSelectedGame(selectedGameId));
  }
}
