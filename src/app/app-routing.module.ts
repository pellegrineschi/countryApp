import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AbautPageComponent } from './shared/pages/abaut-page/abaut-page.component';
import { ContacPageComponent } from './shared/pages/contac-page/contac-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path:'abaut',
    component: AbautPageComponent
  },
  {
    path: 'contac',
    component: ContacPageComponent

  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
