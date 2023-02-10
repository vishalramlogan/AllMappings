import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice-tel-hp',
  templateUrl: './voice-tel-hp.component.html',
  styleUrls: ['./voice-tel-hp.component.scss']
})
export class VoiceTelHPComponent {

  constructor( private router: Router) { 
  
  } 

  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  navigateToVoiceWBM(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'voiceTelephonyWideband']);
  }
  navigateToVoiceNBM(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'voiceTelephonyNarrowband']);
  }
  navigateToVoiceWBE(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'eModelWideband']);
  }
  navigateToVoiceNBE(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'eModelNarrowband']);
  }
  navigateToVoiceFBE(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'eModelFullband']);
  }

}
