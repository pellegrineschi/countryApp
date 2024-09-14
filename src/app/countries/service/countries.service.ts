import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }

  searchCapital(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchCountry(term: string): Observable<Country[]>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchRegion(region:string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(() => of([]))
    );
  }

}
