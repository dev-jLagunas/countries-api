import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../service/countries.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-countries-home',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './countries-home.component.html',
  styleUrl: './countries-home.component.scss',
})
export class CountriesHomeComponent implements OnInit {
  countries$: Observable<Country[]> | undefined;
  filteredCountries$: Observable<Country[]> | undefined;
  searchTerm: string = '';
  showRegions: boolean = false;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredCountries$ = this.countriesService.getAllCountries();
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }

  navigateToSingleCountry(name: string) {
    this.router.navigate(['countries/single', name]);
  }

  searchCountry() {
    if (!this.searchTerm) {
      this.filteredCountries$ = this.countries$;
    } else {
      this.filteredCountries$ = this.countriesService.searchBasedOnName(
        this.searchTerm
      );
    }
  }

  filterCountriesByRegion(region: string) {
    this.filteredCountries$ = this.countriesService.filterThroughRegion(region);
    this.showRegions = !this.showRegions;
  }
}
