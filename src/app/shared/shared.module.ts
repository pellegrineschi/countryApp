import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AbautPageComponent } from './pages/abaut-page/abaut-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AbautPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    AbautPageComponent
  ]
})
export class SharedModule { }
