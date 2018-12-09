import { Component, OnInit } from '@angular/core';
import { AuthService, LinkedinLoginProvider , GoogleLoginProvider } from 'angular-6-social-login';
import {MessageService} from 'primeng/api';
import { ApiService } from '../services/api.service';
import { skill } from './../skill';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  Name: string;
  Email: string;
  Pass: string;
  readonly: boolean = false;
  image: string = './assets/img/default-profile.png';

  selectedItems: any = [];
  dropdownSettings = {};
  skill = skill;

  users: any;
  EmailExist = false;

  employee: any = [];

  FilseSelected: File = null;

  data: Observable<any>; /* use for firebase store data */



  constructor(  private messageService: MessageService,
                private socialAuthService: AuthService ,
                private apiservice: ApiService,
                private db: AngularFireDatabase,
                private storage: AngularFireStorage) {

                  // this.data = this.db.object('employee').snapshotChanges();
                  // this.data.subscribe( (action) => {

                  //   console.log(action.payload.key);
                  //   console.log(action.payload.val());
                  // });

                }

                check(event) {
                  if (this.users != null && this.users.length > 0) {

                          for  (let i = 0 ; i < this.users.length ; i++) {
                                if (this.users[i].Email === event.target.value) {
                                      this.EmailExist = true;
                                      console.log('Email already exist');
                                      break;
                                } else { this.EmailExist = false ; }
                          }


                  }
              }



  onSubmit() {

    if (this.selectedItems.length !== 0) {

            const eachemp = {
              'Name': this.Name,
              'Email': this.Email,
              'Image': this.image,
              'Password': this.Pass,
              'skills' : this.selectedItems
            };
            this.employee.push(eachemp);
            console.log('Employee Details', this.employee);

            const DB_name = this.db.list('employee');
            DB_name.push(eachemp).then(
              (data) => {
                        const filepath = `Profile Picture/${data.key}`;
                        this.storage.upload(filepath, this.FilseSelected);

              });

              this.messageService.add({severity: 'success', summary: 'Thank You', detail: 'Successfully Submited'});
    } else {
              this.messageService.add({severity: 'error', summary: 'Ohh', detail: 'please select skills'});
    }
  }


    public socialSignIn(socialPlatform: string) {
      let socialPlatformProvider;
      if (socialPlatform === 'linkedin') {
        socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
      } else if (socialPlatform === 'google') {
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {

          console.log(socialPlatform + ' sign in data : ' , userData);
          this.Name = userData.name;
          this.Email = userData.email;
          this.readonly = !this.readonly;
          this.image = userData.image;

        }
      );
    }



    onFileSelected(event) {
      console.log(event);
      this.FilseSelected = <File>event.target.files[0];
      console.log(this.FilseSelected);

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function() {
          const output = (<HTMLImageElement>document.getElementById('output'));
          output.src = reader.result;
        };
      }

    inpClick() {
      $('#pickImage').click();
    }

  ngOnInit() {

      this.db.list('employee').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
     })).subscribe(data => {
      this.users = data;
      console.log(data); /* data comming from firebase database */
   });


    $('.agencyfild').hide();
    $('.agencyrad').on('change', function(e) {
      $('.agencyfild').show();
      $('.individualfild').hide();

    });

    $('.companyrad').on('change', function(e) {
      $('.agencyfild').hide();
      $('.individualfild').show();
    });

    $('#txtonly').keyup(function() {
      const val = this.value.replace(/\d/g, '');
      this.value = val;
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

  }

}
