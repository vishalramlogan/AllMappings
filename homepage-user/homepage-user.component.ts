import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-user',
  templateUrl: './homepage-user.component.html',
  styleUrls: ['./homepage-user.component.scss']
})
export class HomepageUserComponent implements OnInit{

  constructor( private router: Router) { 
  
  } 

  ngOnInit(): void {
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
    if (!localStorage.getItem('token') || localStorage.getItem('token') === "") {
      alert("Session Expired. Login again")
    }
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  navigateToIntroduction() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['introduction', username]);
  }

  navigateToWebBrowsing() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['web-browsing', username]);
  }

  navigateToVoiceTelephony(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['voiceTelephony', username]);
  }

  navigateToVideoTelephony(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['videoTelephony', username]);
  }

  navigateToAudioStreaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['audioStreaming', username]);
  }

  navigateToVideoStreaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['videoStreaming', username]);
  }

  navigateToGaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['gaming', username]);
  }

  logout(){
    localStorage.removeItem('theUser');
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }


  ngOnDestroy(){
  }

}
