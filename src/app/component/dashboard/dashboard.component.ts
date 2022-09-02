import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;   // from api
  constructor(
    private api: ApiService,  //injects the api service
    private route: ActivatedRoute  //injects the activated route
  ) { }

  ngOnInit(): void {
    //get all users on init
    this.getUsers();
    // console.log(this.userData);
  }

  getUsers() {
    this.api.getUsers()
      .subscribe(res => {
        console.log(res)
        this.users = res['data'];
      })
  } 

  searchText: string = '';  //assign value in the search input

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.userData.data.email.includes(this.searchText));  
  }

  search() {
    if(this.searchText === '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(
        res => {
          console.log(res.firstName.input.includes(this.searchText))
          return res.firstName.toLowerCase().indexOf(this.searchText.toLowerCase());
        }
      )
    }
  }

}
