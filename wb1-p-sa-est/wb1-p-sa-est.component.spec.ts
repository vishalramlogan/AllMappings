import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wb1PSaEstComponent } from './wb1-p-sa-est.component';

describe('Wb1PSaEstComponent', () => {
  let component: Wb1PSaEstComponent;
  let fixture: ComponentFixture<Wb1PSaEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wb1PSaEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wb1PSaEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
