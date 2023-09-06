import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  accountForm: FormGroup = new FormGroup({}); // Initialisation ici
  user: any = {};
  users: any;
  title: any;
  title2: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Initialisation du formulaire ici
    this.accountForm = this.formBuilder.group({
      isRSE: [''],
      specificGoals: [''],
      implementedInitiatives: ['']
      // Ajoutez d'autres contrôles si nécessaire
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.users = JSON.parse(localStorage.getItem("users") || "[]");

    if (this.id) {
      this.title = "edit user"
      this.title2 = "edit"
      for (let i = 0; i < this.users.length; i++) {
        // Vous devriez probablement ajouter du code ici pour traiter la condition
      }
    } else {
      this.title = "add user";
      this.title2 = "add user";
    }
  }

  generateRandomPassword(): string {
    const length = 8; // Longueur du mot de passe
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  sendEmail(email: string, subject: string, message: string): void {
    // Ceci est une implémentation fictive, remplacez-la par votre véritable logique d'envoi d'e-mails
    console.log(`Sending email to ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  }

  generateAndSendTemporaryPassword() {
    const randomPassword = this.generateRandomPassword();
    const email = 'example@example.com'; // Remplacez par l'adresse e-mail de l'utilisateur
    const subject = 'Your Temporary Password';
    const message = `Your temporary password is: ${randomPassword}. Please change it after logging in.`;
    this.sendEmail(email, subject, message);
    this.accountForm.get('password')?.setValue(randomPassword);  
  }

  // Assurez-vous d'ajouter la fonction "onSubmit" car elle était mentionnée dans votre modèle
  onSubmit() {
    // Traitez les données de formulaire ici
    console.log(this.accountForm.value);
    // Ajoutez plus de logique pour traiter le formulaire si nécessaire
  }

  addUser() {
    if (!this.id) {
      const temporaryPassword = this.generateRandomPassword();
      this.user.password = temporaryPassword;
      this.users = JSON.parse(localStorage.getItem("users") || "[]");
      let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id = idUser;
      this.users.push(this.user);
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("idUser", (idUser + 1).toString());
    }
  }
}
