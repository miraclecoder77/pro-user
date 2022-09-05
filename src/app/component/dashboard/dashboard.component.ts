import { AuthService } from './../../shared/services/auth.service';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchText: string = '';  //assign value in the search input
  users: any;   // from api
  savedUser;  //get the user detail 
  keyword = 'firstName';  
  userNotFound = 'user name not found';

  constructor(
    private api: ApiService,  //injects the api service
    private AuthService: AuthService, //injects the auth service
    private route: ActivatedRoute  //injects the activated route
  ) { }  

  ngOnInit(): void {
    this.getUsers();    //get all users on init
    this.getSavedUser()
  }

  //get the user display details
  getSavedUser() {
    this.savedUser = this.AuthService.userData;
    // console.log(this.savedUser);
  }
  //get users from the api
  getUsers() {
    this.api.getUsers()
      .subscribe(res => {
        // console.log(res)
        this.users = res['data'];
      })
  } 
  // sign out 
  signOut() {
    this.AuthService.SignOut();
  }
}
