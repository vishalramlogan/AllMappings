import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VoiceTelephonyService} from 'src/app/voice-telephony.service';
import { NarrowbandSpeech } from '../../voicetelephony.model'; 

@Component({
  selector: 'app-voice-nb-m',
  templateUrl: './voice-nb-m.component.html',
  styleUrls: ['./voice-nb-m.component.scss']
})
export class VoiceNbMComponent implements OnInit{
  Message: string;
 
  constructor(public speechService:VoiceTelephonyService, private router: Router) { 
    this.speechService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private nbspeechSubs: Subscription;

  nbspeechs: NarrowbandSpeech[] = [];

  ngOnInit(): void {
    this.nbspeechSubs = this.speechService.getNBSMUpdateListner().subscribe((nbspeechs: NarrowbandSpeech[])=>{
      this.nbspeechs = nbspeechs;
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
    const combination = target.querySelector('#combination').value
    console.log(speechDelay,packetLoss,talkerEcho,combination)
    this.speechService.addNBSpeechMdb(speechDelay,packetLoss,talkerEcho,combination)
  }

  ngOnDestroy(){
    this.nbspeechSubs.unsubscribe();
  }

}
