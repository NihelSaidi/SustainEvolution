import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent  {
  formations = [
    { id: 1, name: 'Formation 1', description: 'Description de la formation 1.' },
    { id: 2, name: 'Formation 2', description: 'Description de la formation 2.' },
    // ... Ajoutez d'autres formations ici
  ];

  experts = [
    { id: 1, name: 'Expert 1', specialty: 'Spécialité de l\'expert 1' },
    { id: 2, name: 'Expert 2', specialty: 'Spécialité de l\'expert 2' },
    // ... Ajoutez d'autres experts ici
  ];

  entreprises = [
    { id: 1, name: 'Entreprise 1', location: 'Emplacement de l\'entreprise 1' },
    { id: 2, name: 'Entreprise 2', location: 'Emplacement de l\'entreprise 2' },
    // ... Ajoutez d'autres entreprises ici
  ];

  selectedFormation: any;
  selectedExpert: any;
  selectedEntreprise: any;

  showFormationDetails(formation: any): void {
    this.selectedFormation = formation;
    this.selectedExpert = null;
    this.selectedEntreprise = null;
  }

  showExpertDetails(expert: any): void {
    this.selectedFormation = null;
    this.selectedExpert = expert;
    this.selectedEntreprise = null;
  }

  showEntrepriseDetails(entreprise: any): void {
    this.selectedFormation = null;
    this.selectedExpert = null;
    this.selectedEntreprise = entreprise;
  }

  closeDetails(): void {
    this.selectedFormation = null;
    this.selectedExpert = null;
    this.selectedEntreprise = null;
  }
}