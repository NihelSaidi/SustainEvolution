import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashborad-user',
  templateUrl: './dashborad-user.component.html',
  styleUrls: ['./dashborad-user.component.css']
})
export class DashboradUserComponent {
  connectedUser :any;
  formations:any;
  constructor(private router : Router) { }

  ngOnInit() {
    // Retrieve user data from local storage
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "{}");
  
    console.log(this.formations);
  }  
  isAuthenticated: boolean = false;

}
