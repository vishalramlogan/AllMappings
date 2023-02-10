import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HigherResolution, LowerResolution} from './audio-streaming.model'; 
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AudioStreamingService {

  private ashrs: HigherResolution[] = [];
  private ashrsAdd = new Subject<HigherResolution[]>();

  private aslrs: LowerResolution[] = [];
  private aslrsAdd = new Subject<LowerResolution[]>();

  private token: string;
  Message = new EventEmitter<string>();  

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
  }

  addASHRMdb(audioBitrate: number, videoBitrate: number,rtpPacketLoss: number,rtpPacketLossBurstiness: number,
    numRTPPacketsTSPackets: number,burstLengthA: number,audioCodec:string){
    const username = localStorage.getItem('theUser');
    const ashr: HigherResolution = {audioBitrate: audioBitrate, videoBitrate: videoBitrate,rtpPacketLoss: rtpPacketLoss,
      rtpPacketLossBurstiness: rtpPacketLossBurstiness,
      numRTPPacketsTSPackets: numRTPPacketsTSPackets,burstLengthA: burstLengthA,audioCodec:audioCodec};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/audioStreamingHR"), ashr ,
       { headers }).subscribe(
         (messageData) => {
           this.ashrs.push(ashr);
           this.ashrsAdd.next([...this.ashrs]);
           this.Message.emit(messageData.MOS);
         },
         error => {
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  } 

  addASLRMdb(audioBitrateLR: number, audioFrameLength: number, averageBurstIP: number, maxSizeAudioStream: number,
    lossRateIPPackets: number, numAudioFrames: number, audioCodec: string){
    const username = localStorage.getItem('theUser');
    const aslr: LowerResolution = {audioBitrateLR: audioBitrateLR, audioFrameLength: audioFrameLength, averageBurstIP: averageBurstIP,
      maxSizeAudioStream: maxSizeAudioStream,
      lossRateIPPackets: lossRateIPPackets, numAudioFrames: numAudioFrames, audioCodec: audioCodec};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/audioStreamingLR"), aslr ,
       { headers }).subscribe(
         (messageData) => {
           this.aslrs.push(aslr);
           this.aslrsAdd.next([...this.aslrs]);
           this.Message.emit(messageData.MOS);
         },
         error => {
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  } 

  getASHRUpdateListner(){
    return this.ashrsAdd.asObservable();
  }

  getASLRUpdateListner(){
    return this.aslrsAdd.asObservable();
  }
} 
 