import { TestBed } from '@angular/core/testing';

import { VideoTelephonyService } from './video-telephony.service';

describe('VideoTelephonyService', () => {
  let service: VideoTelephonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTelephonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
