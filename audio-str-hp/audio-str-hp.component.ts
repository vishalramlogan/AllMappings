import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-str-hp',
  templateUrl: './audio-str-hp.component.html',
  styleUrls: ['./audio-str-hp.component.scss']
})
export class AudioStrHPComponent {
  constructor(private router: Router) { 
  } 

  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  navigateToASHigherResolution(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'audioStreamingHigherResolution']);
  }

  navigateToASLowerResolution(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'audioStreamingLowerResolution']);
  }
}
