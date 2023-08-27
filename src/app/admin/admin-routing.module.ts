import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'loginAdmin', component: LoginAdminComponent },
{ path: 'dashboardAdmin', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
