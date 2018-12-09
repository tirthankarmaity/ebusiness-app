import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from '../../node_modules/ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private loadingspinner: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
    this.loadingspinner.show();
    setTimeout(() => {
    this.loadingspinner.hide();
    }, 2000);
  }
}
