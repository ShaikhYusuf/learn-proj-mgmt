import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson24Component } from './lesson24.component';

describe('Lesson24Component', () => {
  let component: Lesson24Component;
  let fixture: ComponentFixture<Lesson24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
