import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { MessageService } from 'primeng/components/common/messageservice';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser: any = {};
  user: any = {};
  alldata: any = [];

  userskill: string = '';

  Name: string = '';
  Email: string = '';
  Password: any ;
  Image: string = '';
  skill: any = [];

  obj1: any = {}; /* use to store firebase object */
  obj2: any = {}; /* use to store session with key */

  employee: any = [];
  position: number;

  profileImageUrl: Observable <string | null>;


  constructor( private router: Router ,
               private db: AngularFireDatabase ,
               private messageService: MessageService,
               private storage: AngularFireStorage) { }

  update()  {
              this.obj1 = {
                            Name: this.Name,
                            Email : this.Email,
                            Image: this.Image,
                            Password: this.Password,
                            skills: this.skill
                        };
              this.obj2 = {
                          Name: this.Name,
                          Email : this.Email,
                          Image: this.Image,
                          Password: this.Password,
                          key: this.currentuser.key,
                          skills: this.skill
                      };

            this.db.object('/employee/' + this.currentuser.key)
            .update(this.obj1);
            sessionStorage.setItem('authuser', JSON.stringify(this.obj2));

            this.messageService.add({severity: 'success', summary: 'profile updated', detail: 'please refresh the page'});
    }

  delete() {
            this.db.object('/employee/' + this.currentuser.key)
            .remove();
            sessionStorage.removeItem('authuser');
            this.router.navigate(['']);
            location.reload();
    }



  ngOnInit() {


    this.currentuser = JSON.parse(sessionStorage.getItem('authuser'));

    const ref = this.storage.ref(`Profile Picture/${this.currentuser.key}`);
    this.profileImageUrl = ref.getDownloadURL();



    if (this.currentuser) {
         for  (let i = 0; i < this.currentuser.skills.length; i++) {
                  this.userskill += this.currentuser.skills[i].name + ' / ';

         }
         this.userskill = this.userskill.substr(0, this.userskill.length - 2);
    }


    this.Name = this.currentuser.Name;
    this.Email = this.currentuser.Email;
    this.Password = this.currentuser.Password;
    this.Image = this.currentuser.Image;
    this.skill = this.currentuser.skills;


  }
}
