import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson26Component } from './lesson26.component';

describe('Lesson26Component', () => {
  let component: Lesson26Component;
  let fixture: ComponentFixture<Lesson26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
