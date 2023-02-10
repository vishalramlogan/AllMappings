import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingMComponent } from './gaming-m.component';

describe('GamingMComponent', () => {
  let component: GamingMComponent;
  let fixture: ComponentFixture<GamingMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
