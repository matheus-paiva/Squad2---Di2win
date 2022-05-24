import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdEngineComponent } from './third-engine.component';

describe('ThirdEngineComponent', () => {
  let component: ThirdEngineComponent;
  let fixture: ComponentFixture<ThirdEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
