import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson34Component } from './lesson34.component';

describe('Lesson34Component', () => {
  let component: Lesson34Component;
  let fixture: ComponentFixture<Lesson34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson34Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
