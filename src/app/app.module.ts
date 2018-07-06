import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
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
import {AfterLoginService} from './services/after-login.service';
import {GuestService} from './services/guest.service';
import { NgxSpinnerModule } from 'ngx-spinner';

const appRoutes: Routes = [
    {path: '', component:UserComponent},
    {path: 'products', component: ProductComponent,
        canActivate: [AfterLoginService]
    },
    {path:'login', component:LoginComponent,
        canActivate: [GuestService]
    },

    {path:'profile', component:ProfileComponent},
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
      ReactiveFormsModule,
      HttpClientModule,
      NgxSpinnerModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
