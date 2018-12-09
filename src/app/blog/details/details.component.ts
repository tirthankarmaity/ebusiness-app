import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  information: any = {};

  constructor(private activatedRoute: ActivatedRoute, private apiservice: ApiService) { }

  blogDetails() {
    this.apiservice.details(this.id).subscribe((data) => {
      this.information = data;
      console.log(this.information);
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {
        this.id = this.activatedRoute.snapshot.queryParams['id'];
        this.blogDetails();

  }
}
