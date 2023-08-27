import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Initialize error message to an empty string

  constructor(private router: Router) {}

  login() {
    // Vérification factice, pour des raisons de démonstration
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/dashboardAdmin']);
    } else {
      this.errorMessage = 'Wrong information!'; // Set the error message
    }
  }
}

