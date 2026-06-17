import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson36Component } from './lesson36.component';

describe('Lesson36Component', () => {
  let component: Lesson36Component;
  let fixture: ComponentFixture<Lesson36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
