import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageMissionComponent } from './about-page-mission.component';

describe('AboutPageMissionComponent', () => {
  let component: AboutPageMissionComponent;
  let fixture: ComponentFixture<AboutPageMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
