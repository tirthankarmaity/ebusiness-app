import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  image: string = null;


  constructor() { }

  logout() {
    const currentuser = sessionStorage.getItem('authuser');
    if (currentuser) {
        sessionStorage.removeItem('authuser');

    }
  }

  ngOnInit() {
    const currentuser = JSON.parse(sessionStorage.getItem('authuser'));
      if (currentuser) {
         this.image = currentuser.Image;
         this.status = true;
      } else {
          this.status = false;
       }
  }
}
