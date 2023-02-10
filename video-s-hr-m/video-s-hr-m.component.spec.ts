import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSHrMComponent } from './video-s-hr-m.component';

describe('VideoSHrMComponent', () => {
  let component: VideoSHrMComponent;
  let fixture: ComponentFixture<VideoSHrMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSHrMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSHrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
