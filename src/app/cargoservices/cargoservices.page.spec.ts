import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoservicesPage } from './cargoservices.page';

describe('CargoservicesPage', () => {
  let component: CargoservicesPage;
  let fixture: ComponentFixture<CargoservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoservicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
