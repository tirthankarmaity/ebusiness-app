import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  information: any = [];
  p: number;

  constructor(private apiservice: ApiService, private router: Router) { }
  blog() {
    this.apiservice.fetch().subscribe((data) => {
      this.information = data;
      console.log(this.information);
    }, error => {
      console.log(error);
    });
  }

  details(info) {
    console.log(info.id);
        this.router.navigate(['blog/details'], { queryParams: { 'id': info.id } });
  }


  ngOnInit() {
    this.blog();
    this.p = 1;
  }
}
