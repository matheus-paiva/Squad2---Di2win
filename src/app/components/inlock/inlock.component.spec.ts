import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlockComponent } from './inlock.component';

describe('InlockComponent', () => {
  let component: InlockComponent;
  let fixture: ComponentFixture<InlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
