import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons3Component } from './lessons3.component';

describe('Lessons3Component', () => {
  let component: Lessons3Component;
  let fixture: ComponentFixture<Lessons3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lessons3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lessons3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
