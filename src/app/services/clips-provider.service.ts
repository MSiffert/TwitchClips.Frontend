import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClipResponse } from '../models/clip-response.model';
import { ClipsFilter } from '../store/models/clips-filter.action';

@Injectable()
export class ClipsProviderService {
  public constructor(private httpClient: HttpClient) { }

  public getClips(clipsFilter: ClipsFilter, take: number): Observable<ClipResponse> {
    const queryParameters = this.getQueryParameters(clipsFilter, take);
    console.log('clipsFilter is', clipsFilter);
    const url = 'https://twitchclips-api.azurewebsites.net/api/Token/clips' + queryParameters;
    return this.httpClient.get<ClipResponse>(url);
  }

  public getNextClips(clipsFilter: ClipsFilter, cursor: string, take: number): Observable<ClipResponse> {
    const url = 'https://twitchclips-api.azurewebsites.net/api/Token/clips/next' + this.getQueryParameters(clipsFilter, take, cursor);
    return this.httpClient.get<ClipResponse>(url);
  }

  public getPreviousClips(clipsFilter: ClipsFilter, cursor: string, take: number): Observable<ClipResponse> {
    const url = 'https://twitchclips-api.azurewebsites.net/api/Token/clips/before' + this.getQueryParameters(clipsFilter, take, cursor);
    return this.httpClient.get<ClipResponse>(url);
  }

  private getQueryParameters(clipsFilter: ClipsFilter, take: number, cursor: string = null) {
    let queryFilter = '';

    queryFilter += clipsFilter.selectedGame != null ? '&gameId=' + clipsFilter.selectedGame.id : '';
    queryFilter += clipsFilter.selectedUser != null ? '&userId=' + clipsFilter.selectedUser.id : '';
    queryFilter += cursor ? '&cursor=' + cursor : '';
    queryFilter += take ? '&take=' + take : '';

    return queryFilter.replace('&', '?');
  }
}
