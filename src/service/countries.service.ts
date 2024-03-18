import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Country } from '../country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/data.json').pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching data:', error);
        return throwError(
          () => new Error('An error occurred while fetching data')
        );
      })
    );
  }

  getSingleCountry(name: string): Observable<Country> {
    return this.getAllCountries().pipe(
      map((countries) => {
        const country = countries.find((country) => country.name === name);
        if (!country) {
          throw new Error(`No country found with name: ${name}`);
        }
        return country;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching data:', error);
        return throwError(
          () => new Error('An error occurred while fetching data')
        );
      })
    );
  }

  filterThroughRegion(region: string): Observable<Country[]> {
    return this.getAllCountries().pipe(
      map((countries) =>
        countries.filter((country) => country.region === region)
      )
    );
  }
}
