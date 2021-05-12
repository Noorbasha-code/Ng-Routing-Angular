import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrhelpComponent } from './hrhelp.component';

describe('HrhelpComponent', () => {
  let component: HrhelpComponent;
  let fixture: ComponentFixture<HrhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrhelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
