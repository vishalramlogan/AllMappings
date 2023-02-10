import { TestBed } from '@angular/core/testing';

import { AudioStreamingService } from './audio-streaming.service';

describe('AudioStreamingService', () => {
  let service: AudioStreamingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioStreamingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
