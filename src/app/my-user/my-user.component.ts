import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MyUser } from '../MyUser';

const myUserUrl = 'http://localhost:8080/users';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {

  myUsers: MyUser[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers().subscribe(users => this.myUsers = users);
  }

  getUsers(): Observable<MyUser[]> {
    try {
      const httpHeaders = new HttpHeaders();
      httpHeaders.append('Access-Control-Allow-Origin', '*');

      return this.http.get<MyUser[]>(myUserUrl, {headers: httpHeaders});
    } catch (error) {
      console.log(error);
    }
  }
}
