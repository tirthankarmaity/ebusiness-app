import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../node_modules/primeng/api';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

Email: string;
Pass: string;
vaildEmail: string;
status: boolean;

users: any;


  constructor( private router: Router,
               private messageService: MessageService ,
               private db: AngularFireDatabase ) {

    this.status = false;
  }

  check() {

  if (this.users != null && this.users.length > 0) {
        for ( let i = 0; i < this.users.length; i++) {
            if ((this.users[i].Email === this.Email) && (this.users[i].Password === this.Pass)) {
              sessionStorage.setItem('authuser', JSON.stringify(this.users[i]));
              this.vaildEmail = this.users[i].Email;
              this.status = true;
              this.messageService.add({severity: 'success', summary: `Welcome ${this.Email}`, detail: 'You are successfully Log-In'});
              setTimeout(() => {
                this.router.navigate(['blog']);
              }, 3000);
             } //else {
            //   this.messageService.add({severity: 'error', summary: `${this.Email} Does Not Exist`, detail: 'Invalid E-mail or Password'});
            //   setTimeout(() => {
            //     this.router.navigate(['registration']);
            //   }, 3000);
            // }
        }
      } else {
        this.messageService.add({severity: 'error', summary: `${this.Email} Does Not Exist`, detail: 'Invalid E-mail or Password'});
  }

  }


  ngOnInit() {

    this.db.list('employee').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
     })).subscribe(data => {
      this.users = data;
      console.log(data); /* data comming from firebase database */
   });

  }
}
