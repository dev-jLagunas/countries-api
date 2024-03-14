import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../country';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-single.component.html',
  styleUrl: './country-single.component.scss',
})
export class CountrySingleComponent implements OnInit {
  country!: Country;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.countriesService.getSingleCountry(name).subscribe((country) => {
        this.country = country;
        console.log(this.country.borders);
      });
    } else {
    }
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }
}
