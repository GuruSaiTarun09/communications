import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"createproduct",component:CreateproductComponent},
  {path:"createbutton",component:CreateproductComponent},
  {path:"allproduct",component:AllproductsComponent},
  {path:"viewproduct",component:ViewproductComponent},
  {path:"",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
