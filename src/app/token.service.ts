import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public http: HttpClient) { }

  getToken(user:User) {
    return this.http.post("http://localhost:59293/api/token", user);
  }

}
