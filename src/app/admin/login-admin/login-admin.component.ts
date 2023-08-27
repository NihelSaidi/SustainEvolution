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

  constructor(private router: Router) { }

  login() {
    // Vérification factice, pour des raisons de démonstration
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/dashboardAdmin']);
    }
  }

}
