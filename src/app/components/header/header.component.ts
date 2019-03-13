import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterPreloader, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor(private httpCLient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.fragment.subscribe(frament => {
      if (frament != null) {
        const to = frament.indexOf('&');

        const accessToken =  frament.substr(13, to - 13);

        localStorage.setItem('access_token', accessToken);

        router.navigate(['.']);
      }
    });
  }

  public login() {
    const url = 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=dlkcnd6tb137reu80zzugsi5xg5fwk&redirect_uri=http://localhost:4200&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671';
    window.location.href = url;
    this.httpCLient.get(url);
  }
}
