import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClipResponse } from '../models/clip-response.model';
import { Clip } from '../models/clip.model';
import { GameResponse } from '../models/game-response.model';

@Injectable()
export class GameProviderService {
  public constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<Game[]> {
    try {
      return this.httpClient.get<GameResponse>('https://twitchclips-api.azurewebsites.net/api/Token/games/top').pipe(map(result => result.data ));
    } catch (error) {
      console.log(error);
    }
  }
}
