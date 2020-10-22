import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSwitchComponent } from './simple-switch.component';

describe('SimpleSwitchComponent', () => {
  let component: SimpleSwitchComponent;
  let fixture: ComponentFixture<SimpleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
