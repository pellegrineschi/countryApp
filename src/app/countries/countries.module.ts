import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRountingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRountingModule
  ]
})
export class CountriesModule { }
