import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson29Component } from './lesson29.component';

describe('Lesson29Component', () => {
  let component: Lesson29Component;
  let fixture: ComponentFixture<Lesson29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
