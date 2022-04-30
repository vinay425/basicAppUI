import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import {  Observable} from 'rxjs';

const myappURL="http://localhost:80/myapp";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }
 
  getStatus(email){
    const url = 'http://localhost:80/myapp/login';  
  return this.http.get(url, {
    //headers: headers,
    headers: new HttpHeaders().append("Content-Type", "text"),
    params: {
      email:email,
    },
    responseType: 'text',
});
  
}
}
