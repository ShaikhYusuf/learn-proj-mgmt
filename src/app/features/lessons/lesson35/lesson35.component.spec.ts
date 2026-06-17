import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson35Component } from './lesson35.component';

describe('Lesson35Component', () => {
  let component: Lesson35Component;
  let fixture: ComponentFixture<Lesson35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
