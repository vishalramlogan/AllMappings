import { TestBed } from '@angular/core/testing';

import { VoiceTelephonyService } from './voice-telephony.service';

describe('VoiceTelephonyService', () => {
  let service: VoiceTelephonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceTelephonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
