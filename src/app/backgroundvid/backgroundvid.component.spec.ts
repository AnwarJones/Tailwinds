import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundvidComponent } from './backgroundvid.component';

describe('BackgroundvidComponent', () => {
  let component: BackgroundvidComponent;
  let fixture: ComponentFixture<BackgroundvidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundvidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
