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
  user: any = {};
  users: any;
  title: any;
  title2: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.users = JSON.parse(localStorage.getItem("users") || "[]");

    if (this.id) {
      this.title = "edit user"
      this.title2 = "edit"
      for (let i = 0; i < this.users.length; i++) {
         
       }
      

    }
    else {
      this.title = "add user";
      this.title2 = "add user";
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
    if (!this.id) {
      // Generating a temporary password
      const temporaryPassword = this.generateRandomPassword(); // Replace with your password generation logic
      this.user.password = temporaryPassword;
  
      // Other code to add the user to the local storage
      this.users = JSON.parse(localStorage.getItem("users") || "[]");
      let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id = idUser;
  
      this.users.push(this.user);
  
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("idUser", idUser + 1);
    }
  }
  
  
  
  
  
  
  
 

}
