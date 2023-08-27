import { Component } from '@angular/core';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent {
  formations = [
    { id: 1, name: 'Formation 1', description: 'Description de la formation 1.' },
    { id: 2, name: 'Formation 2', description: 'Description de la formation 2.' },
    // ... Ajoutez d'autres formations ici
  ];

  selectedFormation: any; // Pour stocker la formation sélectionnée

  showDetails(formation: any): void {
    this.selectedFormation = formation;
  }

  closeDetails(): void {
    this.selectedFormation = null;
  }
}

