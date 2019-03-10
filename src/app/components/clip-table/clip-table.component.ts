import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Clip } from 'src/app/models/clip.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PageEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getMostViewedClipsTableState } from '../../store/selectors/state.selectors';
import * as ClipActions from '../../store/actions/mostViewedClipsTableState.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clip-table',
  templateUrl: './clip-table.component.html',
  styleUrls: ['./clip-table.component.css'],
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
  private currentPageSize = 25;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const mostViewedClipsTableState = this.store.select(getMostViewedClipsTableState);

    this.clips = mostViewedClipsTableState.pipe(map(result => result.clips));
    this.isLoading = mostViewedClipsTableState.pipe(map(result => result.isLoading));
    this.store.dispatch(new ClipActions.FetchCurrent());
  }

  public downloadClip(clip: Clip): string {
    return this.getVideoDownloadUrl(clip.thumbnail_url);
  }

  private getVideoDownloadUrl(thumbnailUrl: string) {
    const startIndex = thumbnailUrl.indexOf('-preview');
    return thumbnailUrl.substring(0, startIndex) + '.mp4';
  }

  public async pageChange(pageEvent: PageEvent) {
    console.log(this.currentPageSize, pageEvent.pageSize);
    if (pageEvent.pageSize !== this.currentPageSize) {
      this.store.dispatch(new ClipActions.ChangeSize(pageEvent.pageSize));
      this.currentPageSize = pageEvent.pageSize;
      return;
    }

    if (pageEvent.previousPageIndex < pageEvent.pageIndex) {
      this.store.dispatch(new ClipActions.FetchNext());
      this.currentPageSize = pageEvent.pageSize;
      return;
    }

    if (pageEvent.previousPageIndex > pageEvent.pageIndex) {
      this.store.dispatch(new ClipActions.FetchPrevious());
      this.currentPageSize = pageEvent.pageSize;
      return;
    }
  }
}
