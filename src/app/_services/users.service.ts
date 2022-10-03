import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../_models/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  constructor(private http: HttpClient) {}

  users =  [
    {
      uid:1,
      username:'johnd',
      name:'John',
      surname:'Doe',
      password:'12345678',
      email:'John@gmail.com',
      imgUrl:''
    },
    {
      uid: 2,
      username: 'dkapo',
      name: 'Dritan',
      surname: 'Kapo',
      password: 'm38rmF$',
      email: 'Dritan@gmail.com',
      imgUrl: ''
    }
  ]

  getAllUsers(): User[] {
    return this.users
  }


}
