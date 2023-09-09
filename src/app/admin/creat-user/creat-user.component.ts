import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent {
  addPlatForm!: FormGroup;
  user: any = {
    companyName: 'ABC inc.',
    industrySector: 'Technology',
    companySize: 'Medium business',
    companyWebsite: 'www.abcinc.com',
    contactPerson: 'John Doe',
    contactEmail: 'johndoe@abcinc.com',
    contactPhone: 1234567890,
    userRole: 'Administrator', // Vous pouvez définir un mot de passe par défaut ici
  };
  users: any;
  title: any;
  title2: any;
  id: any;

constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
   this.addPlatForm = this.formBuilder.group({
        companyName: [''],
        industrySector: [''],
        companySize: [''],
        address: [''],
        country: [''],
        companyWebsite: [''], // Add the company website control
        contactPerson: [''], // Add the contact person control
        contactEmail: [''], // Add the contact email control
        contactPhone: [''], // Add the contact phone control
        userRole: [''] ,// Add the user role control
        password: [''],
      })
    ;
}
 ngOnInit() {
  const users = JSON.parse(localStorage.getItem('users')||"[]");
  if (users) {
    this.addPlatForm.patchValue(users); // Patch the form values
  }
}

generateRandomPassword(): string {
  const length = 8; // Length of the password
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
  sendEmail(email: string, subject: string, message: string): void {
    // This is a mock implementation, replace with your actual email sending logic
    console.log(`Sending email to ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  }
  generateAndSendTemporaryPassword() {
    const randomPassword = this.generateRandomPassword(); // Adjust the length as needed
    const email = 'nihel.saidi@etudiant-fsegt.utm.tn';
    const subject = 'Your Temporary Password';
    const message = `Your temporary password is: ${randomPassword}. Please change it after logging in.`;
  
    this.sendEmail(email, subject, message);
  
    // Set the generated password to the form control
    this.user.get('password')?.setValue(randomPassword);  
  }
  addUser() {
  localStorage.setItem('users', JSON.stringify(this.addPlatForm.value));
}

}
