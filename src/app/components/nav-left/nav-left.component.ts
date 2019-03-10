import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Game } from 'src/app/models/game.model';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as MostViewedClipsTableActions from '../../store/actions/mostViewedClipsTableState.actions';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavLeftComponent implements OnInit {

  @Input() data: Observable<Game[]>;

  public displayedColumns: string[] = ['select', 'name'];
  public selection = new SelectionModel<Game>(false, []);
  public games = new MatTableDataSource<Game>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.data.subscribe(res => {
      this.games.data = res;
    });
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.games.data.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.games.data.forEach(row => this.selection.select(row));
  }

  public applyConfiguration() {
    const selectedGameId = this.selection.selected[0].id;
    this.store.dispatch(new MostViewedClipsTableActions.ChangeGame(selectedGameId));
  }
}
