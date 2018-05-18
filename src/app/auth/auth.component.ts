import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pi-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error:string;
  user = new User();
  constructor(public tokenSVC:TokenService, private router:Router) { 

  }

  ngOnInit() {
  }

  onSubmit(){
    debugger
    this.tokenSVC.getToken(this.user)
        .subscribe(t => {
          sessionStorage.setItem("token",t["token"]);
          this.router.navigate(["pizzas"]);
        }, err => this.error = err.message);
  }
}
