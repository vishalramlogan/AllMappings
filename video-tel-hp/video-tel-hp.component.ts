import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-tel-hp',
  templateUrl: './video-tel-hp.component.html',
  styleUrls: ['./video-tel-hp.component.scss']
})
export class VideoTelHPComponent {
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

  navigateToVideo(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'videoTelephony']);
  }

}
