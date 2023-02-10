import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VoiceTelephonyService} from 'src/app/voice-telephony.service';
import { FullbandE } from '../../voicetelephony.model'; 

@Component({
  selector: 'app-voice-fb-e',
  templateUrl: './voice-fb-e.component.html',
  styleUrls: ['./voice-fb-e.component.scss']
})
export class VoiceFbEComponent implements OnInit{
  Message: string;
 
  constructor(public wbspeechService:VoiceTelephonyService, private router: Router) { 
    this.wbspeechService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private fbeSubs: Subscription;

  febs: FullbandE[] = [];

  ngOnInit(): void {
    this.fbeSubs = this.wbspeechService.getFBEUpdateListner().subscribe((febs: FullbandE[])=>{
      this.febs = febs;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToVoiceTelephony(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['voiceTelephony', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const absoluteDelay = target.querySelector('#absoluteDelay').value
    const packetLoss = target.querySelector('#packetLoss').value
    const impairmentFactor = target.querySelector('#impairmentFactor').value
    const packetLossRobustness = target.querySelector('#packetLossRobustness').value
    this.wbspeechService.addFBEMdb(absoluteDelay,packetLoss,impairmentFactor,packetLossRobustness)
  }

  ngOnDestroy(){
    this.fbeSubs.unsubscribe();
  }

}
