import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { TeamComponent } from './component/team/team.component';
import { DashboardUserCsrComponent } from './component/vip/dashboard-user-csr.component';
import { DashboradUserComponent } from './component/dashborad-user/dashborad-user.component';
import { PayComponent } from './component/pay/pay.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'team',component:TeamComponent},
  {path:'dashboardCsr',component:DashboardUserCsrComponent},
  {path:'dashboardUser',component:DashboradUserComponent},
  {path:'vip',component:DashboardUserCsrComponent},
  {path:'pay',component:PayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
