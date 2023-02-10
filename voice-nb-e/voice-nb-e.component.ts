import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VoiceTelephonyService} from 'src/app/voice-telephony.service';
import { NarrowbandE } from '../../voicetelephony.model'; 

@Component({
  selector: 'app-voice-nb-e',
  templateUrl: './voice-nb-e.component.html',
  styleUrls: ['./voice-nb-e.component.scss']
})
export class VoiceNbEComponent implements OnInit{
  Message: string;
 
  constructor(public speechService:VoiceTelephonyService, private router: Router) { 
    this.speechService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private nbeSubs: Subscription;

  nebs: NarrowbandE[] = [];

  ngOnInit(): void {
    this.nbeSubs = this.speechService.getNBEUpdateListner().subscribe((nebs: NarrowbandE[])=>{
      this.nebs = nebs;
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
    const electricCircuitNoise = target.querySelector('#electricCircuitNoise').value
    const noiseFloor = target.querySelector('#noiseFloor').value
    const roomNoiseS = target.querySelector('#roomNoiseS').value
    const roomNoiseR = target.querySelector('#roomNoiseR').value
    const sLoudnessRating = target.querySelector('#sLoudnessRating').value
    const rLoudnessRating = target.querySelector('#rLoudnessRating').value
    const sidetoneMaskingRating = target.querySelector('#sidetoneMaskingRating').value
    const dFactorR = target.querySelector('#dFactorR').value
    const dFactorS = target.querySelector('#dFactorS').value
    const classDelaySensitivity = target.querySelector('#classDelaySensitivity').value
    const meanOneWayDelay = target.querySelector('#meanOneWayDelay').value
    const absoluteDelay = target.querySelector('#absoluteDelay').value
    const roundTripDelay = target.querySelector('#roundTripDelay').value
    const talkerEchoLoudness = target.querySelector('#talkerEchoLoudness').value
    const weightedEchoPathLoss = target.querySelector('#weightedEchoPathLoss').value
    const qdu = target.querySelector('#qdu').value
    const equipmentImpairmentFac = target.querySelector('#equipmentImpairmentFac').value
    const packetLossRobustness = target.querySelector('#packetLossRobustness').value
    const packetLossProb = target.querySelector('#packetLossProb').value
    const burstRate = target.querySelector('#burstRate').value
    const advantageFactor = target.querySelector('#advantageFactor').value
    
    this.speechService.addNBEMdb(electricCircuitNoise, noiseFloor, roomNoiseS, roomNoiseR, sLoudnessRating, 
      rLoudnessRating, sidetoneMaskingRating, dFactorR, dFactorS, classDelaySensitivity, 
      meanOneWayDelay, absoluteDelay, roundTripDelay, talkerEchoLoudness, 
      weightedEchoPathLoss, qdu, equipmentImpairmentFac, packetLossRobustness,
      packetLossProb, burstRate, advantageFactor)
  }

  ngOnDestroy(){
    this.nbeSubs.unsubscribe();
  }
}
