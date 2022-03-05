import { AlertifyService } from './../../services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedInUser:string
  constructor(private alerty:AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedInUser= localStorage.getItem('token');
    return this.loggedInUser;
  }

  loggedOut(){
    localStorage.removeItem('token');
    this.alerty.success("You are logged out!")
  }

}
