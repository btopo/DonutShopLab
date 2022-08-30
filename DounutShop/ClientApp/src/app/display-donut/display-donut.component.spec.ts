import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDonutComponent } from './display-donut.component';

describe('DisplayDonutComponent', () => {
  let component: DisplayDonutComponent;
  let fixture: ComponentFixture<DisplayDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
