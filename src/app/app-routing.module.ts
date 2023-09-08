import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { TeamComponent } from './component/team/team.component';
import { DashboradUserComponent } from './component/dashborad-user/dashborad-user.component';
import { PayComponent } from './component/pay/pay.component';
import { VipComponent } from './component/vip/vip.component';
import { UserComponent } from './component/user/user.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'team', component: TeamComponent },
  { path: 'vip', component: VipComponent },
      { path: 'pay', component: PayComponent }, 
      {path:'user',component:UserComponent},
  {
    path: 'dashboardUser',
    component:DashboradUserComponent, // Correction ici
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
