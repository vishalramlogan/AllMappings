import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSLrMComponent } from './audio-s-lr-m.component';

describe('AudioSLrMComponent', () => {
  let component: AudioSLrMComponent;
  let fixture: ComponentFixture<AudioSLrMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioSLrMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioSLrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
