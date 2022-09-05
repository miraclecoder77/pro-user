import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //api endpiont
  baseUrl:string = 'https://res.cloudinary.com/dywqrl9ia/raw/upload/v1661851924/data_f5kq6n.json';

  constructor(
    private http: HttpClient  //injects httpClient service
  ) { }
    //get the users from api endpiont
  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
  
}
