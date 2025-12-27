import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { CreatebuttonComponent } from './components/createbutton/createbutton.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"createproduct",component:CreateproductComponent},
  {path:"createbutton",component:CreatebuttonComponent},
  {path:"allproduct",component:AllproductsComponent},
  {path:"viewproduct",component:ViewproductComponent},
  {path:"",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
