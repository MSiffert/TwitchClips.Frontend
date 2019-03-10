import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClipResponse } from '../models/clip-response.model';

@Injectable()
export class ClipsProviderService {
  public constructor(private httpClient: HttpClient) { }

  public getClips(gameId: string, take: number): Observable<ClipResponse> {
    try {
      const url = 'https://localhost:5001/api/Token/clips?gameId=' + gameId + '&take=' + take;
      return this.httpClient.get<ClipResponse>(url);
    } catch (error) {
      console.error(error);
    }
  }

  public getNextClips(gameId: string, cursor: string, take: number): Observable<ClipResponse> {
    const url = 'https://localhost:5001/api/Token/clips/next?gameId=' + gameId + '&cursor=' + cursor + '&take=' + take;
    return this.httpClient.get<ClipResponse>(url);
  }

  public getPreviousClips(gameId: string, cursor: string, take: number): Observable<ClipResponse> {
    const url = 'https://localhost:5001/api/Token/clips/before?gameId=' + gameId + '&cursor=' + cursor + '&take=' + take;
    return this.httpClient.get<ClipResponse>(url);
  }
}
