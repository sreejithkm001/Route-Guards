import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private isAdmin = false;

  login(username: any, password: any) {
    //authentication logic
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.isAdmin = true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.isAdmin = false;
    } else {
      this.isAuthenticated = false;
      this.isAdmin = false;
    }

    console.log(`User authenticated: ${this.isAuthenticated}, Admin: ${this.isAdmin}`);
  }

  logout() {
    this.isAuthenticated = false;
    this.isAdmin = false;
    console.log('User logged out');
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }
}
