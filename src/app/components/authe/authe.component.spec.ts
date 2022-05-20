import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheComponent } from './authe.component';

describe('AutheComponent', () => {
  let component: AutheComponent;
  let fixture: ComponentFixture<AutheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
