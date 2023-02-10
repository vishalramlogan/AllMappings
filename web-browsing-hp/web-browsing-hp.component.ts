import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-browsing-hp',
  templateUrl: './web-browsing-hp.component.html',
  styleUrls: ['./web-browsing-hp.component.scss']
})
export class WebBrowsingHPComponent {

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

  navigateTo1PS(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'web1PageSession']);
  }
  navigateTo1PSESSA(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'web1PageSession','ExpectedSessionTimeSA']);
  }


  navigateTo2PS(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'web2PageSession']);
  }

  navigateToSTE(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'webSingleTimingEvent']);
  }

}