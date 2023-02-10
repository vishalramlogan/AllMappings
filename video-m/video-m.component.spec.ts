import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMComponent } from './video-m.component';

describe('VideoMComponent', () => {
  let component: VideoMComponent;
  let fixture: ComponentFixture<VideoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
