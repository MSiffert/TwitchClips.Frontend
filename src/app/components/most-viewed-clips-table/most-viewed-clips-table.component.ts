import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Clip } from 'src/app/models/clip.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PageEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getMostViewedClipsTableState } from '../../store/selectors/state.selectors';
import * as ClipActions from '../../store/actions/most-viewed-clips-table.actions';
import { map } from 'rxjs/operators';
import { getClipsFilterState } from '../../store/selectors/state.selectors';
import * as MostViewedClipsTableActions from '../../store/actions/most-viewed-clips-table.actions';

@Component({
  selector: 'app-most-viewed-clips-table',
  templateUrl: './most-viewed-clips-table.component.html',
  styleUrls: ['./most-viewed-clips-table.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ClipTableComponent implements OnInit {

  @Output() pageConfigurationChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public isLoading: Observable<boolean>;
  public clips: Observable<Clip[]>;
  public displayedColumns: string[] = ['id', 'url', 'broadcaster_name', 'created_at', 'view_count', 'download'];
  public expandedElement: Clip | null;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  private selectedPageSize = 25;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const mostViewedClipsTableState = this.store.select(getMostViewedClipsTableState);

    this.observeGameChanges();

    this.clips = mostViewedClipsTableState.pipe(map(result => result.clips));
    this.isLoading = mostViewedClipsTableState.pipe(map(result => result.isLoading));
  }

  private observeGameChanges() {
    this.store.select(getClipsFilterState).subscribe(res => {
      if (res != null && res.games.length !== 0) {
        this.store.dispatch(new MostViewedClipsTableActions.FetchCurrent());
      }
    });
  }

  public downloadClip(clip: Clip): string {
    const startIndex = clip.thumbnail_url.indexOf('-preview');
    return clip.thumbnail_url.substring(0, startIndex) + '.mp4';
  }

  public async pageChange(pageEvent: PageEvent) {
    if (pageEvent.pageSize !== this.selectedPageSize) {
      this.store.dispatch(new ClipActions.ChangeSize(pageEvent.pageSize));
      this.selectedPageSize = pageEvent.pageSize;
      return;
    }

    if (pageEvent.previousPageIndex < pageEvent.pageIndex) {
      this.store.dispatch(new ClipActions.FetchNext());
      this.selectedPageSize = pageEvent.pageSize;
      return;
    }

    if (pageEvent.previousPageIndex > pageEvent.pageIndex) {
      this.store.dispatch(new ClipActions.FetchPrevious());
      this.selectedPageSize = pageEvent.pageSize;
      return;
    }
  }
}
