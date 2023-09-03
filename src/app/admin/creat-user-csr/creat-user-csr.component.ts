import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creat-user-csr',
  templateUrl: './creat-user-csr.component.html',
  styleUrls: ['./creat-user-csr.component.css']
})
export class CreatUserCsrComponent {
  addPlatForm!: FormGroup;
  csrUser: any = {};
  csrUsers: any;
  title: any;
  title2: any;
  id: any;
  imagePreview: any;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.csrUsers = JSON.parse(localStorage.getItem("csrUsers") || "[]");

    if (this.id) {
      this.title = "edit csrUser"
      this.title2 = "edit"
      for (let i = 0; i < this.csrUsers.length; i++) {
         
       }
      

    }
    else {
      this.title = "add Plat";
      this.title2 = "add plat";
      this.addPlatForm = this.formBuilder.group({
        companyName: [''],
        industrySector: [''],
        companySize: [''],
        address: [''],
        country: [''],
        companyWebsite: [''],
        contactPerson: [''],
        contactEmail: [''],
        contactPhone: [''],
        userRole: [''],
        CSRGoals: [''],
        temporaryPassword: [''],
        CSRInitiatives: [''],
        // Add new attributes to the form
        SusDeveProj: [''],
        carbfootprintresmeas: [''],
        renewenergie: [''],
        sustainmaterials: [''],
        comsupprog: [''],
        divincmeas: [''],
        estrainproj: [''],
        TransparencyEthicsPolicies: [''],
        AntiCorrupGovMeas: [''],
        respecthumainrights: [''],
        collaborations: [''],
        joinproj: [''],
        Annualpub: [''],
        keyperform: [''],
        envfriendlyprodserv: [''],
        innovatech: [''],
        quantitativemeasur: [''],
        TestCaseStudies: [''],
      })
    }



  }

  addcsrUser(){
   
    if (this.id) {
      // edit
      for (let i = 0; i < this.csrUsers.length; i++) {
        if (this.csrUsers[i].id == this.id) {
          this.csrUsers[i] = this.csrUser;
        }

      }
      localStorage.setItem("csrUsers", JSON.stringify(this.csrUsers));

    } else {

      //let connectedcsrUser = JSON.parse(localStorage.getItem("connectedcsrUser"));
      this.csrUsers = JSON.parse(localStorage.getItem("csrUsers") || "[]");
      let idcsrUser = JSON.parse(localStorage.getItem("idcsrUser") || "1");
      this.csrUser.id = idcsrUser;

      this.csrUsers.push(this.csrUser);

      localStorage.setItem("csrUsers", JSON.stringify(this.csrUsers));
      localStorage.setItem("idcsrUser", idcsrUser + 1);


    }
  
  }
  
  
  
  
  
  
  generateRandomPassword(length: number): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
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
    const randomPassword = this.generateRandomPassword(10); // Adjust the length as needed
    const email = 'nihel.saidi@etudiant-fsegt.utm.tn';
    const subject = 'Your Temporary Password';
    const message = `Your temporary password is: ${randomPassword}. Please change it after logging in.`;
  
    this.sendEmail(email, subject, message);
  
    // Set the generated password to the form control
    this.csrUser.get('temporaryPassword')?.setValue(randomPassword);  
  }
}
