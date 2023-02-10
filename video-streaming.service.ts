import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HigherResolution, LowerResolution} from './video-streaming.model'; 
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VideoStreamingService {

private vshrs: HigherResolution[] = [];
private vshrsAdd = new Subject<HigherResolution[]>();

private vslrs: LowerResolution[] = [];
private vslrsAdd = new Subject<LowerResolution[]>();

private token: string;
Message = new EventEmitter<string>();  

constructor(private http: HttpClient) { 
  this.token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
}

addVSHRMdb(numPixelsPerVideo: number, videoResolution: string, frameRate: number, sliceFrame: number, videoBitrate: number,
  videoPLC: string, freezingRatio:number, lossMagnitude: number){
  const username = localStorage.getItem('theUser');
  const vshr: HigherResolution = {numPixelsPerVideo: numPixelsPerVideo, videoResolution: videoResolution, frameRate: frameRate,
    sliceFrame: sliceFrame, videoBitrate: videoBitrate, videoPLC: videoPLC, freezingRatio:freezingRatio, lossMagnitude: lossMagnitude}
  const headers = {'Authorization': `Bearer ${this.token}`};

     this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/videoStreamingHR"), vshr ,
     { headers }).subscribe(
       (messageData) => {
         this.vshrs.push(vshr);
         this.vshrsAdd.next([...this.vshrs]);
         this.Message.emit(messageData.MOS);
       },
       error => {
         if (error.status != 200) {
           alert(error.error.message);
         }
       }
     );
} 

addVSLRMdb(packetLoss: string, rebuffering: string, videoWidth: number, videoHeight:number, videoPLC: string,
  rebufferingLength: number, numRebufferingEvents: number, rebufferingFactor: number, numVideos: number,
  videoContentCoding: number, codingCompression: number, measureTime: number , ipPacketLoss: number, ipPacketLossRate:number,
  gopLength: number, videoBitrate: number, videoFrameRate: number){
  const username = localStorage.getItem('theUser');
  const vslr: LowerResolution = {packetLoss: packetLoss, rebuffering: rebuffering, videoWidth: videoWidth, 
    videoHeight: videoHeight, videoPLC: videoPLC, rebufferingLength: rebufferingLength, numRebufferingEvents: numRebufferingEvents,
    rebufferingFactor: rebufferingFactor, numVideos: numVideos, videoContentCoding: videoContentCoding, 
    codingCompression: codingCompression, measureTime: measureTime, ipPacketLoss: ipPacketLoss, ipPacketLossRate: ipPacketLossRate,
    gopLength: gopLength, videoBitrate: videoBitrate, videoFrameRate: videoFrameRate};
  const headers = {'Authorization': `Bearer ${this.token}`};

     this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/videoStreamingLR"), vslr ,
     { headers }).subscribe(
       (messageData) => {
         this.vslrs.push(vslr);
         this.vslrsAdd.next([...this.vslrs]);
         this.Message.emit(messageData.MOS);
       },
       error => {
         if (error.status != 200) {
           alert(error.error.message);
         }
       }
     );
} 

getVSHRUpdateListner(){
  return this.vshrsAdd.asObservable();
}

getVSLRUpdateListner(){
  return this.vslrsAdd.asObservable();
}
}
