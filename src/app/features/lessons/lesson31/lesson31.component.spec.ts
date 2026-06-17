import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson31Component } from './lesson31.component';

describe('Lesson31Component', () => {
  let component: Lesson31Component;
  let fixture: ComponentFixture<Lesson31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
