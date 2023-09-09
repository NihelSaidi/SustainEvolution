import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  accountForm: FormGroup = new FormGroup({}); // Initialisation ici
  user: any = {};
  title: any;
  title2: any;
  id: any;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      companyName: [''],
      industrySector: [''],
      companySize: [''],
      companyWebsite: [''],
      contactPerson: [''],
      contactEmail: [''],
      contactPhone: [''],
      userRole: [''],
      CSRGoals: [''],
      temporaryPassword: [''],
      CSRInitiatives: [''],
      isRSE: [''],
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

 

  // Assurez-vous d'ajouter la fonction "onSubmit" car elle était mentionnée dans votre modèle
  onSubmit() {
    // Traitez les données de formulaire ici
    console.log(this.accountForm.value);
    // Ajoutez plus de logique pour traiter le formulaire si nécessaire
  }

  addUser() {

      // Get the form data from accountForm
      const formData = this.accountForm.value;

      // Add the user data to localStorage
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      let idUser = JSON.parse(localStorage.getItem("idUser") || "0");
      formData.id = idUser;
      users.push(formData);

      // Update localStorage
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("idUser", JSON.stringify(idUser + 1));

      // Log the form data for debugging
      console.log("User data added: ", formData);
  }
}