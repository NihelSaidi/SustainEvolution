// src/app/email-list/email-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent {
  emails = [
    {
      sender: 'mouhamed@gmail.com',
      date: '2023-08-27',
      content: "informations de compte"
    },{
      sender: 'amine@gmail.com',
      date: '2023-08-27',
      content: "informations de compte"
    },
  ];
}
