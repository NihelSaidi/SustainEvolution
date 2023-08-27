import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { TeamComponent } from './component/team/team.component';
import { FormationListComponent } from './component/formation-list/formation-list.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'formations', component: FormationListComponent},
  {path:'about',component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'team',component:TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
