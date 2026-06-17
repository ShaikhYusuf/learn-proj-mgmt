import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson40Component } from './lesson40.component';

describe('Lesson40Component', () => {
  let component: Lesson40Component;
  let fixture: ComponentFixture<Lesson40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
