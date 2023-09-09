import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { TeamComponent } from './component/team/team.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboradUserComponent } from './component/dashborad-user/dashborad-user.component';
import { PayComponent } from './component/pay/pay.component';
import { VipComponent } from './component/vip/vip.component';
import { UserComponent } from './component/user/user.component';
import { PaymentComponent } from './component/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Autres routes
 { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    TeamComponent,
    DashboradUserComponent,
    PayComponent,
    VipComponent,
    UserComponent,
    PaymentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot(routes),// Configuration des routes
    // Autres modules
    AdminModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
