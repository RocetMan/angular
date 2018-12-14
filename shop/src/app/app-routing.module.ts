import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: ' new', component: CatalogComponent
      },
      {
        path: 'mans', component: CatalogComponent
      },
      {
        path: 'woman', component: CatalogComponent
      },
      {
        path: 'shoes', component: CatalogComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
