import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {AudioStreamingService} from 'src/app/audio-streaming.service';
import { LowerResolution } from '../../audio-streaming.model'; 

@Component({
  selector: 'app-audio-s-lr-m',
  templateUrl: './audio-s-lr-m.component.html',
  styleUrls: ['./audio-s-lr-m.component.scss']
})
export class AudioSLrMComponent implements OnInit{
  Message: string;
 
  constructor(public audioService:AudioStreamingService, private router: Router) { 
    this.audioService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private audioSubs: Subscription;

  audios: LowerResolution[] = [];

  ngOnInit(): void {
    this.audioSubs = this.audioService.getASLRUpdateListner().subscribe((audios: LowerResolution[])=>{
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
    const audioBitrateLR = target.querySelector('#audioBitrateLR').value
    const audioFrameLength = target.querySelector('#audioFrameLength').value
    const averageBurstIP = target.querySelector('#averageBurstIP').value
    const  maxSizeAudioStream = target.querySelector('#maxSizeAudioStream').value
    const lossRateIPPackets = target.querySelector('#lossRateIPPackets').value
    const numAudioFrames = target.querySelector('#numAudioFrames').value
    const audioCodec = target.querySelector('#audioCodec').value
    this.audioService.addASLRMdb(audioBitrateLR, audioFrameLength, averageBurstIP, maxSizeAudioStream,
      lossRateIPPackets, numAudioFrames, audioCodec)
  }

  ngOnDestroy(){
    this.audioSubs.unsubscribe();
  }

}


