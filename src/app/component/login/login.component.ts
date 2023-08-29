import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  csrUser: any = {};
  loginForm !: FormGroup;
  notExist: Boolean = false;
  findedUser: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })

  }
  login() {
    console.log(this.user);
    console.log(this.csrUser);
  
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let csrUsers = JSON.parse(localStorage.getItem("csrUsers") || "[]");
    let findedUser = null; // Initialize with null
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].contactEmail === this.user.email && users[i].password === this.user.password) {
        findedUser = users[i];
        break; // No need to continue searching
      }
    }
  
    if (!findedUser) {
      for (let i = 0; i < csrUsers.length; i++) {
        if (csrUsers[i].contactEmail === this.user.email && csrUsers[i].password === this.csrUser.password) {
          findedUser = csrUsers[i];
          break; // No need to continue searching
        }
      }
    }
  
    if (findedUser) {
      localStorage.setItem("connectedUser", JSON.stringify(findedUser));
      this.router.navigate(['dashboardUser']);
    } else {
      this.notExist = true;
    }
  }
}  
  

