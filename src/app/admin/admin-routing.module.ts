import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { DemandeComponent } from './demande/demande.component';
import { CreatFormationComponent } from './creat-formation/creat-formation.component';
import { CreatUserCsrComponent } from './creat-user-csr/creat-user-csr.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'loginAdmin', component: LoginAdminComponent },
{ path: 'dashboardAdmin', component: AdminDashboardComponent },
{path: 'create' , component:CreatUserComponent},
{path:'createCSR',component:CreatUserCsrComponent},
{path:'formation',component:CreatFormationComponent},
{path:'profil',component:AdminHomeComponent},
{path:'demande',component:DemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
