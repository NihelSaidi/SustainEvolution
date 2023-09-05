import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
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
