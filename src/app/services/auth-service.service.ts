import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

      isUserAuthenticated() {
        const validuser = JSON.parse(sessionStorage.getItem('authuser'));

        if (validuser === null) {
          this.router.navigate(['not exist']);
          return false ;
        } else {
          return true;
        }

    }

    isUserValid() {
      const user = JSON.parse(sessionStorage.getItem('authuser'));

      if (user != null) {
        this.router.navigate(['']);
        return false;

      } else {
        return true;
      }

  }
}

