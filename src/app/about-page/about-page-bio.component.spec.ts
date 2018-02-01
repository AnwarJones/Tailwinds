import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageBioComponent } from './about-page-bio.component';

describe('AboutPageBioComponent', () => {
  let component: AboutPageBioComponent;
  let fixture: ComponentFixture<AboutPageBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
