import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameResponse } from '../models/game-response.model';
import { UsersResponse } from '../models/users-response.model';

@Injectable()
export class UsersProviderService {
  public constructor(private httpClient: HttpClient) { }

  public getGames(username: string): Observable<UsersResponse> {
    try {
      return this.httpClient.get<GameResponse>('https://twitchclips-api.azurewebsites.net/Token/user?username=' + username);
    } catch (error) {
      console.error(error);
    }
  }
}
