import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wb1PSaStComponent } from './wb1-p-sa-st.component';

describe('Wb1PSaStComponent', () => {
  let component: Wb1PSaStComponent;
  let fixture: ComponentFixture<Wb1PSaStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wb1PSaStComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wb1PSaStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
