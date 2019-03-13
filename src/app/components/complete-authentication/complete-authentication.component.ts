import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complete-authentication',
  templateUrl: './complete-authentication.component.html',
  styleUrls: ['./complete-authentication.component.css']
})
export class CompleteAuthenticationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(frament => {
      if (frament != null) {
        const to = frament.indexOf('&');
        localStorage.setItem('access_token', frament.substr(13, to - 13));

        this.router.navigate(['/']);
      }
    });
  }
}
