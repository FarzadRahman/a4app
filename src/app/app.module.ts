import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';

const appRoutes: Routes = [
    {path:'', component:UserComponent},
    {path:'products', component:ProductComponent},
    {path:'about', component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
