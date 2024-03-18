import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../service/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './countries-home.component.html',
  styleUrl: './countries-home.component.scss',
})
export class CountriesHomeComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  searchTerm: string = '';
  showRegions: boolean = false;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
        this.filteredCountries = data;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }

  navigateToSingleCountry(name: string) {
    this.router.navigate(['countries/single', name]);
  }

  searchCountry() {
    if (!this.searchTerm) {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter((country) => {
        console.log(this.searchTerm);
        return country.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    }
  }

  filterCountriesByRegion(region: string) {
    this.countriesService.filterThroughRegion(region).subscribe(
      (countries: Country[]) => {
        this.filteredCountries = countries;
        this.showRegions = !this.showRegions;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
