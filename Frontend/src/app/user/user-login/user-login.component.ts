import { AlertifyService } from './../../../services/alertify.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice:AuthService,
              private alertify:AlertifyService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    const token = this.authservice.authUser(loginForm.value);
    if(token){
      this.alertify.success("login successful");
      this.router.navigate(['/']);
    }else{
      this.alertify.error("login unsuccessful");
    }
  }


}
