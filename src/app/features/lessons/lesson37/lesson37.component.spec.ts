import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson37Component } from './lesson37.component';

describe('Lesson37Component', () => {
  let component: Lesson37Component;
  let fixture: ComponentFixture<Lesson37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson37Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
