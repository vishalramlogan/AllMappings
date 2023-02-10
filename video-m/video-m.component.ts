import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VideoTelephonyService} from 'src/app/video-telephony.service';
import { Video } from '../../video-telephony.model'; 

@Component({
  selector: 'app-video-m',
  templateUrl: './video-m.component.html',
  styleUrls: ['./video-m.component.scss']
})
export class VideoMComponent implements OnInit{
  Message: string;
 
  constructor(public videoService:VideoTelephonyService, private router: Router) { 
    this.videoService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private videoSubs: Subscription;

  videos: Video[] = [];

  ngOnInit(): void {
    this.videoSubs = this.videoService.getVTMUpdateListner().subscribe((videos: Video[])=>{
      this.videos = videos;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToVideoTelephony(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['videoTelephony', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const videoPacketLoss = target.querySelector('#videoPacketLoss').value
    const videoFrameRate = target.querySelector('#videoFrameRate').value
    const videoBitRate = target.querySelector('#videoBitRate').value
    const combinationVT = target.querySelector('#combinationVT').value
    this.videoService.addVTMdb(videoPacketLoss, videoFrameRate,videoBitRate,combinationVT)
  }

  ngOnDestroy(){
    this.videoSubs.unsubscribe();
  }

}
