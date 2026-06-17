import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson39Component } from './lesson39.component';

describe('Lesson39Component', () => {
  let component: Lesson39Component;
  let fixture: ComponentFixture<Lesson39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson39Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
