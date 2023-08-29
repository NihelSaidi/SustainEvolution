import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { DemandeComponent } from './demande/demande.component';
import { CreatFormationComponent } from './creat-formation/creat-formation.component';
import { CreatUserCsrComponent } from './creat-user-csr/creat-user-csr.component';

@NgModule({
  declarations: [
   
    AdminHomeComponent,
    AdminDashboardComponent,
    LoginAdminComponent,
    CreatUserComponent,
    DemandeComponent,
    CreatFormationComponent,
    CreatUserCsrComponent,
    // Other module imports if needed
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
