import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VoiceTelephonyService} from 'src/app/voice-telephony.service';
import { WidebandE } from '../../voicetelephony.model'; 

@Component({
  selector: 'app-voice-wb-e',
  templateUrl: './voice-wb-e.component.html',
  styleUrls: ['./voice-wb-e.component.scss']
})
export class VoiceWbEComponent implements OnInit{
  Message: string;
 
  constructor(public speechService:VoiceTelephonyService, private router: Router) { 
    this.speechService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private wbeSubs: Subscription;

  webs: WidebandE[] = [];

  ngOnInit(): void {
    this.wbeSubs = this.speechService.getWBEUpdateListner().subscribe((webs: WidebandE[])=>{
      this.webs = webs;
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
    const meanOneWayDelay = target.querySelector('#meanOneWayDelay').value
    const packetLossProb = target.querySelector('#packetLossProb').value
    const talkerEchoLoudRating = target.querySelector('#talkerEchoLoudRating').value
    const equipmentImpairment = target.querySelector('#equipmentImpairment').value
    const absoluteDelay = target.querySelector('#absoluteDelay').value
    const roundTripDelay = target.querySelector('#roundTripDelay').value
    const weightedEchoPathLoss = target.querySelector('#weightedEchoPathLoss').value
    const packetLossRobustness = target.querySelector('#packetLossRobustness').value
    this.speechService.addWBEMdb(meanOneWayDelay, packetLossProb, talkerEchoLoudRating, equipmentImpairment,
      absoluteDelay, roundTripDelay, weightedEchoPathLoss, packetLossRobustness)
  }

  ngOnDestroy(){
    this.wbeSubs.unsubscribe();
  }
}