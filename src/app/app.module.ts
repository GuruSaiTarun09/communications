import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { CreatebuttonComponent } from './components/createbutton/createbutton.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateproductComponent,
    AllproductsComponent,
    ViewproductComponent,
    CreatebuttonComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
