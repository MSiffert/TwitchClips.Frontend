import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
  }
}
