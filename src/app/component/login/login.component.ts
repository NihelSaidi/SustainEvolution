import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder } from'@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
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
  
    // Simulation : Vérification des informations d'identification statiques
   if (this.user.email === 'admin@example.com' && this.user.password === 'password') {
      // Rediriger vers la page du profil d'administrateur
      this.router.navigate(['/admin/dashboardAdmin']);
    } else {
      // Informations d'identification incorrectes
      this.notExist = true;
    } 
  }
}
