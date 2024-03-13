import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../service/countries.service';
import { Router } from '@angular/router';
import { CountrySingleComponent } from './country-single/country-single.component';

@Component({
  selector: 'app-countries-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './countries-home.component.html',
  styleUrl: './countries-home.component.scss',
})
export class CountriesHomeComponent implements OnInit {
  countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
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
}
