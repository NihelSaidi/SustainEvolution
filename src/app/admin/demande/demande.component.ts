import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  constructor(private router: Router) {}

  redirectToAnotherPage() {
    // Utilisation du routeur pour naviguer vers une autre page
    this.router.navigate(['/create']);
  }

  emails = [
    {
      sender: 'johndoe@abcinc.com',
      date: '2023-08-27',
      content: "Information  "
    },{
      sender: 'user.david@gmail.com',
      date: '2023-08-27',
      content: "Information"
    },
  ];
}
