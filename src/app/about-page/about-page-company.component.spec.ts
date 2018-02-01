import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageCompanyComponent } from './about-page-company.component';

describe('AboutPageCompanyComponent', () => {
  let component: AboutPageCompanyComponent;
  let fixture: ComponentFixture<AboutPageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
