import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson38Component } from './lesson38.component';

describe('Lesson38Component', () => {
  let component: Lesson38Component;
  let fixture: ComponentFixture<Lesson38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson38Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
