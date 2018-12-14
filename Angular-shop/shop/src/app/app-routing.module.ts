import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {HomeContentComponent} from "./pages/home-content/home-content.component";
import {LoyaltyProgramComponent} from "./pages/loyalty-program/loyalty-program.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path:'', component: HomeContentComponent
      },
      {
        path:'loyalty-program', component: LoyaltyProgramComponent
      },
      {
        path:'product-list/:category', component: ProductListComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
