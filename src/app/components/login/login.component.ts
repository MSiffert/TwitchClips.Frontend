import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public challenge() {
    const url = 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=dlkcnd6tb137reu80zzugsi5xg5fwk&redirect_uri=http://localhost:4200/complete_authentication&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671';
    window.location.href = url;
  }
}
