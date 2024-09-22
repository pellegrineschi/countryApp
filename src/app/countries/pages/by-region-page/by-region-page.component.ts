import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../service/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public region: Region[] = ['Africa', 'Europe','America', 'Asia', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchRegion(region: Region): void{

    this.selectedRegion = region

    this.countryService.searchRegion(region)
    .subscribe( countries => {
      this.countries = countries;
    })

  }

}
