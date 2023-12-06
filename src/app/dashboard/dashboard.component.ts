import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public isAdmin: boolean;

  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.getIsAdmin();
  }

  logout() {
    this.authService.logout();
  }

}
