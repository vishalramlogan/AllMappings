import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VideoStreamingService} from 'src/app/video-streaming.service';
import { HigherResolution } from '../../video-streaming.model'; 

@Component({
  selector: 'app-video-s-hr-m',
  templateUrl: './video-s-hr-m.component.html',
  styleUrls: ['./video-s-hr-m.component.scss']
})
export class VideoSHrMComponent implements OnInit{
  Message: string;
 
  constructor(public videoService:VideoStreamingService, private router: Router) { 
    this.videoService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private videoSubs: Subscription;

  videos: HigherResolution[] = [];

  ngOnInit(): void {
    this.videoSubs = this.videoService.getVSHRUpdateListner().subscribe((videos: HigherResolution[])=>{
      this.videos = videos;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToVideoStreaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['videoStreaming', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const numPixelsPerVideo = target.querySelector('#numPixelsPerVideo').value
    const videoResolution = target.querySelector('#videoResolution').value
    const frameRate = target.querySelector('#frameRate').value
    const sliceFrame = target.querySelector('#sliceFrame').value
    const videoBitrate = target.querySelector('#videoBitrate').value
    const videoPLC = target.querySelector('#videoPLC').value
    const freezingRatio = target.querySelector('#freezingRatio').value
    const lossMagnitude = target.querySelector('#lossMagnitude').value
    this.videoService.addVSHRMdb(numPixelsPerVideo, videoResolution, frameRate, sliceFrame,videoBitrate, videoPLC, freezingRatio,
      lossMagnitude)
  }

  ngOnDestroy(){
    this.videoSubs.unsubscribe();
  }

}

