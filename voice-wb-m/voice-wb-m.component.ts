import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VoiceTelephonyService} from 'src/app/voice-telephony.service';
import { WidebandSpeech } from '../../voicetelephony.model'; 

@Component({
  selector: 'app-voice-wb-m',
  templateUrl: './voice-wb-m.component.html',
  styleUrls: ['./voice-wb-m.component.scss']
})
export class VoiceWbMComponent implements OnInit{
  Message: string;
 
  constructor(public wbspeechService:VoiceTelephonyService, private router: Router) { 
    this.wbspeechService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private wbspeechSubs: Subscription;

  wbspeechs: WidebandSpeech[] = [];

  ngOnInit(): void {
    this.wbspeechSubs = this.wbspeechService.getWBSMUpdateListner().subscribe((wbspeechs: WidebandSpeech[])=>{
      this.wbspeechs = wbspeechs;
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
    const speechDelay = target.querySelector('#speechDelay').value
    const packetLoss = target.querySelector('#packetLoss').value
    const talkerEcho = target.querySelector('#talkerEcho').value
    const impairmentFactor = target.querySelector('#impairmentFactor').value
    const packetLossRobustness = target.querySelector('#packetLossRobustness').value
    //console.log(speechDelay,packetLoss,talkerEcho,impairmentFactor,packetLossRobustness)
    this.wbspeechService.addWBSpeechMdb(speechDelay,packetLoss,talkerEcho,impairmentFactor,packetLossRobustness)
  }

  ngOnDestroy(){
    this.wbspeechSubs.unsubscribe();
  }

}
