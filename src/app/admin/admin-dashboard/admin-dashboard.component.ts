import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  users : any;
  connectedUser :any;
  formations:any;
  constructor(private router : Router) { }

  ngOnInit() {
    // Retrieve user data from local storage
    this.users = JSON.parse(localStorage.getItem('users') || "[]");
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "{}");
  
    console.log(this.users);
    console.log(this.formations);
  }  
  isAuthenticated: boolean = false;

  logout() {
    // Logique de déconnexion ici
    this.isAuthenticated = false;
  }
  
 

  
}
