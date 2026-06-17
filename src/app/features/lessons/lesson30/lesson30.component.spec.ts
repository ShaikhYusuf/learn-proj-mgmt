import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson30Component } from './lesson30.component';

describe('Lesson30Component', () => {
  let component: Lesson30Component;
  let fixture: ComponentFixture<Lesson30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
