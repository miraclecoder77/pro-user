import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: any;   // from api
  constructor(
    private api: ApiService,  //injects the api service
    private route: ActivatedRoute  //injects the activated route
  ) { }

  ngOnInit(): void {
    //get all users on init
    this.getUsers();
    console.log(this.userData);
  }

  getUsers() {
    this.api.getUsers()
      .subscribe(res => {
        console.log(res)
        this.userData = res['data'];
      })
  } 

}
