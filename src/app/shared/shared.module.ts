import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AbautPageComponent } from './pages/abaut-page/abaut-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AbautPageComponent,
    SidebarComponent,
    ContacPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AbautPageComponent,
    SidebarComponent,
    ContacPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
