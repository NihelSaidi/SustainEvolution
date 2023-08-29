import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creat-formation',
  templateUrl: './creat-formation.component.html',
  styleUrls: ['./creat-formation.component.css']
})
export class CreatFormationComponent {
  addPlatForm!: FormGroup;
  formation: any = {};
  formations: any;
  title: any;
  title2: any;
  id: any;
  imagePreview: any;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.formations = JSON.parse(localStorage.getItem("formations") || "[]");

    if (this.id) {
      this.title = "edit formation"
      this.title2 = "edit"
      // for (let i = 0; i < this.formations.length; i++) {
      //   
      //   }
      // }

    }
    else {
      this.title = "add Plat";
      this.title2 = "add plat";
      this.addPlatForm = this.formBuilder.group({
        formationName: [''],
        description: [''],
        price: ['']
      })
    }



  }

  addformation() {
    if (this.id) {
      // edit
      for (let i = 0; i < this.formations.length; i++) {
        if (this.formations[i].id == this.id) {
          this.formations[i] = this.formation;
        }

      }
      localStorage.setItem("formations", JSON.stringify(this.formations));

    } else {

      //let connectedformation = JSON.parse(localStorage.getItem("connectedformation"));
      this.formations = JSON.parse(localStorage.getItem("formations") || "[]");
      let idformation = JSON.parse(localStorage.getItem("idformation") || "1");
      this.formation.id = idformation;
      //this.formation.idChef = connectedformation._id;

      this.formations.push(this.formation);

      localStorage.setItem("formations", JSON.stringify(this.formations));
      localStorage.setItem("idformation", idformation + 1);


    }

  }

}
