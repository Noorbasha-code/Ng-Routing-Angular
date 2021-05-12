import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FGroupComponent } from './f-group.component';

describe('FGroupComponent', () => {
  let component: FGroupComponent;
  let fixture: ComponentFixture<FGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
