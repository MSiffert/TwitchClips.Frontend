import { Component, OnInit, ViewChild } from '@angular/core';
import { GameProviderService } from './services/game-provider.service';
import { Observable } from 'rxjs';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public games: Observable<Game[]>;

  public constructor(private gameProviderService: GameProviderService) { }

  public ngOnInit() {
    this.games = this.gameProviderService.getGames();
  }
}
