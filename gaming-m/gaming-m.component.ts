import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {GamingService} from 'src/app/gaming.service';
import { Gaming } from '../../gaming.model'; 

@Component({
  selector: 'app-gaming-m',
  templateUrl: './gaming-m.component.html',
  styleUrls: ['./gaming-m.component.scss']
})
export class GamingMComponent implements OnInit{
  Message: string;
 
  constructor(public gamingService:GamingService, private router: Router) { 
    this.gamingService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private gamingSubs: Subscription;

  gamings: Gaming[] = [];

  ngOnInit(): void {
    this.gamingSubs = this.gamingService.getGamingUpdateListner().subscribe((gamings: Gaming[])=>{
      this.gamings = gamings;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToGaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['gaming', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const bitrate = target.querySelector('#bitrate').value
    const numPixelsPerVideo = target.querySelector('#numPixelsPerVideo').value
    const packetLoss = target.querySelector('#packetLoss').value
    const encodingFrameRate = target.querySelector('#encodingFrameRate').value
    const lossSensitivityClass = target.querySelector('#lossSensitivityClass').value
    const encodingComplexity = target.querySelector('#encodingComplexity').value
    const delay = target.querySelector('#delay').value
    this.gamingService.addGMdb(bitrate, numPixelsPerVideo, packetLoss, encodingFrameRate, lossSensitivityClass, encodingComplexity,
      delay)
  }

  ngOnDestroy(){
    this.gamingSubs.unsubscribe();
  }

}