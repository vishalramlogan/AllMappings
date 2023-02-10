import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gaming-hp',
  templateUrl: './gaming-hp.component.html',
  styleUrls: ['./gaming-hp.component.scss']
})
export class GamingHPComponent {
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

  navigateToGaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'gaming']);
  }

}
