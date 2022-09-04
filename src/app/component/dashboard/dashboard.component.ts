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
  savedUser;  
  config;
  item;

  constructor(
    private api: ApiService,  //injects the api service
    private AuthService: AuthService, //injects the auth service
    private route: ActivatedRoute  //injects the activated route
  ) { }  

  ngOnInit(): void {
    //get all users on init
    this.getUsers();
    this.getSavedUser()
  }

  //get the user display details
  getSavedUser() {
    this.savedUser = this.AuthService.userData;
    console.log(this.savedUser);
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

  // onSearchTextEntered(searchValue: string) {
  //   this.searchText = searchValue;  
  // }

  // search() {
  //   if(this.searchText === '') {
  //     this.ngOnInit();
  //   } else {
  //     this.users = this.users.filter(
  //       res => {
  //         console.log(res.firstName.input.includes(this.searchText))
  //         return res.firstName.toLowerCase().indexOf(this.searchText.toLowerCase());
  //       }
  //     )
  //   }
  // }

}
