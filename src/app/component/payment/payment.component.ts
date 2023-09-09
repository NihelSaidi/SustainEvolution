import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
    selectedPaymentType: string = ''; // This property stores the selected payment type
  
    constructor(private router: Router) { }
  
    onSubmit() {
      // Depending on the selected payment type, navigate to the appropriate payment page
      switch (this.selectedPaymentType) {
        case 'bankCard':
          this.router.navigate(['/pay']);
          break;
        case 'masterCard':
          this.router.navigate(['/pay']);
          break;
        case 'paypal':
          this.router.navigate(['/pay']);
          break;
        default:
          // Handle other cases or show an error message
          break;
      }
    }
  }
  


