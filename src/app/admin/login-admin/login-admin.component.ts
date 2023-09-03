import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder } from'@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  user : any = {};
  loginForm !: FormGroup;
  notExist : Boolean = false ;
  findedUser :any;
  constructor( private formBuilder : FormBuilder,     private router : Router ) { }
  
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email : [''],
      password : [''],
    })
    
  }
  login() {
    console.log(this.user);

    // Simulation: Verify static login credentials
    if (this.user.email === 'admin@example.com' && this.user.password === 'password') {
      // Save the connected admin's id to local storage
      localStorage.setItem('connectedUser', JSON.stringify({ id: 'idAdmin' }));
      
      // Redirect to the admin dashboard
      this.router.navigate(['dashboardAdmin']);
    } else {
      // Incorrect credentials
      this.notExist = true;
    }
  }
}
