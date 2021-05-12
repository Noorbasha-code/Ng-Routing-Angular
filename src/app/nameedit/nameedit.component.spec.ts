import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameeditComponent } from './nameedit.component';

describe('NameeditComponent', () => {
  let component: NameeditComponent;
  let fixture: ComponentFixture<NameeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
