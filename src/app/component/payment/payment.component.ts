import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  cardNumber: string='';
  expiry: string='';
  cvv: string='';
  errorMessage: string='';

  constructor(private router: Router) {}

  submitForm() {
    // Simulate payment validation
    if (this.cardNumber === '5579401423082988' && this.expiry === '08/24' && this.cvv === '200') {
      // Payment success
      localStorage.setItem('paymentStatus', 'success');
      this.router.navigate(['/vip']); // Redirect to VIP page
    } else {
      // Payment error
      this.errorMessage = 'Payment failed. Please check your card details and try again.';
    }
  }
}
