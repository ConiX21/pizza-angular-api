import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable()
export class StringService {

  constructor(private http:HttpClient) { }

  getValues(token :string){
    let options = {
      headers : new HttpHeaders({
        "Authorization" : `Bearer ${token}`
      })
    };
    return this.http.get("http://localhost:59293/api/values", options);
  }

  postValues(){
    return this.http.post("http://localhost:59293/api/values",{Authorize : "Bearer token"},{});
  }

}
