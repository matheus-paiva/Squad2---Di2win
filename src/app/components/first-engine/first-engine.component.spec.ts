import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEngineComponent } from './first-engine.component';

describe('FirstEngineComponent', () => {
  let component: FirstEngineComponent;
  let fixture: ComponentFixture<FirstEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
