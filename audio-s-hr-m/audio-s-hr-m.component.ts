import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {AudioStreamingService} from 'src/app/audio-streaming.service';
import { HigherResolution } from '../../audio-streaming.model'; 

@Component({
  selector: 'app-audio-s-hr-m',
  templateUrl: './audio-s-hr-m.component.html',
  styleUrls: ['./audio-s-hr-m.component.scss']
})
export class AudioSHrMComponent implements OnInit{
  Message: string;
 
  constructor(public audioService:AudioStreamingService, private router: Router) { 
    this.audioService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private audioSubs: Subscription;

  audios: HigherResolution[] = [];

  ngOnInit(): void {
    this.audioSubs = this.audioService.getASHRUpdateListner().subscribe((audios: HigherResolution[])=>{
      this.audios = audios;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToAudioStreaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['audioStreaming', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const audioBitrate = target.querySelector('#audioBitrate').value
    const videoBitrate = target.querySelector('#videoBitrate').value
    const rtpPacketLoss = target.querySelector('#rtpPacketLoss').value
    const rtpPacketLossBurstiness = target.querySelector('#rtpPacketLossBurstiness').value
    const numRTPPacketsTSPackets = target.querySelector('#numRTPPacketsTSPackets').value
    const burstLengthA = target.querySelector('#burstLengthA').value
    const audioCodec = target.querySelector('#audioCodec').value
    this.audioService.addASHRMdb(audioBitrate, videoBitrate,rtpPacketLoss,rtpPacketLossBurstiness,
      numRTPPacketsTSPackets,burstLengthA,audioCodec)
  }

  ngOnDestroy(){
    this.audioSubs.unsubscribe();
  }

}


