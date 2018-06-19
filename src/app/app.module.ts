import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import {DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
    {path:'', component:UserComponent},
    {path:'products', component:ProductComponent},
    {path:'login', component:LoginComponent},
    {path:'profile', component:ProductComponent},
    {path:'about', component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ProductComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
