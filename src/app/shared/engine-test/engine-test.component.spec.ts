import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTestComponent } from './engine-test.component';

describe('EngineTestComponent', () => {
  let component: EngineTestComponent;
  let fixture: ComponentFixture<EngineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
