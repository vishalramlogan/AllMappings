import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSHrMComponent } from './audio-s-hr-m.component';

describe('AudioSHrMComponent', () => {
  let component: AudioSHrMComponent;
  let fixture: ComponentFixture<AudioSHrMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioSHrMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioSHrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
