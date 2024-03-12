import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySingleComponent } from './country-single.component';

describe('CountrySingleComponent', () => {
  let component: CountrySingleComponent;
  let fixture: ComponentFixture<CountrySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
