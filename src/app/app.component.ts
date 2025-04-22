import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Agentic-AI';

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.authService.token$.subscribe(token => {
      if (!token) {
        this.router.navigate(['/login']);
      }
    });
  }
}