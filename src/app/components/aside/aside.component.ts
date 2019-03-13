import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Game } from 'src/app/models/game.model';
import { Observable, timer } from 'rxjs';
import { ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getClipsFilterState } from '../../store/selectors/state.selectors';
import * as ClipsFilterActions from '../../store/actions/clips-filter.actions';
import { map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UsersProviderService } from 'src/app/services/users-provider.service';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavLeftComponent implements OnInit, AfterViewInit {

  @ViewChild('inp') input: ElementRef;
  public displayedColumns: string[] = ['select', 'name'];
  public selection: SelectionModel<Game>;
  public games = new Observable<Game[]>();
  public selectedStreamerControl = new FormControl();
  public options: Observable<User[]>;
  public loadingIndicator = true;

  constructor(private store: Store<AppState>, private userProviderService: UsersProviderService) { }

  ngOnInit() {
    this.games = this.store.select(getClipsFilterState).pipe(map(res => res.games));
    this.setInitialSelectionOnFetchComplete();
    this.store.dispatch(new ClipsFilterActions.FetchGames());
  }

  ngAfterViewInit(): void {
    let currentValue;

    this.options = this.selectedStreamerControl.valueChanges.pipe(switchMap(event => {
      currentValue = event;
      this.loadingIndicator = true;
      return timer(400);
    })).pipe(switchMap(() => {
      return this.userProviderService.getGames(currentValue);
    })).pipe(map(userResponse => {
      this.loadingIndicator = false;
      return userResponse.data.length > 0 ? [userResponse.data[0]] : [];
    }));
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

  public clickedOption($event: User) {
    this.store.dispatch(new ClipsFilterActions.SetSelectedUser($event));
  }

  public applyConfiguration() {
    this.store.dispatch(new ClipsFilterActions.SetSelectedGame(this.selection.selected[0]));
  }
}
