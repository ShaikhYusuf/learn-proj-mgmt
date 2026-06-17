import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson22Component } from './lesson22.component';

describe('Lesson22Component', () => {
  let component: Lesson22Component;
  let fixture: ComponentFixture<Lesson22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
