import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { WidebandSpeech, NarrowbandSpeech, FullbandE, WidebandE, NarrowbandE } from './voicetelephony.model'; 
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VoiceTelephonyService {
 
  private wbspeechs: WidebandSpeech[] = [];
  private wbspeechsAdd = new Subject<WidebandSpeech[]>();

  private nbspeechs: NarrowbandSpeech[] = [];
  private nbspeechsAdd = new Subject<NarrowbandSpeech[]>();

  private fbes: FullbandE[] = [];
  private fbesAdd = new Subject<FullbandE[]>();

  private wbes: WidebandE[] = [];
  private wbesAdd = new Subject<WidebandE[]>();

  private nbes: NarrowbandE[] = [];
  private nbesAdd = new Subject<NarrowbandE[]>();

  private token: string;
  Message = new EventEmitter<string>();  

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`; 
  }
 
  addWBSpeechMdb(speechDelay: number,packetLoss: number,talkerEcho: number,impairmentFactor: number,packetLossRobustness: number){
    const username = localStorage.getItem('theUser');
    const wbspeech: WidebandSpeech = {speechDelay: speechDelay,speechPacketLossRate: packetLoss,talkerEchoLoudness: talkerEcho,
      equipmentImpairment: impairmentFactor, packetLossRoubustness:packetLossRobustness};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/voiceTelephonyWideband"), wbspeech ,
       { headers }).subscribe(
         (messageData) => {
           this.wbspeechs.push(wbspeech);
           this.wbspeechsAdd.next([...this.wbspeechs]);
           this.Message.emit(messageData.MOS);
         },
         error => { 
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  addNBSpeechMdb(speechDelay: number,packetLoss: number,talkerEcho: number,combination: number){
    const username = localStorage.getItem('theUser');
    const nbspeech: NarrowbandSpeech = {speechDelayNB: speechDelay,speechPacketLossRateNB: packetLoss,talkerEchoLoudnessNB: talkerEcho,
     combination: combination};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/voiceTelephonyNarrowband"), nbspeech ,
       { headers }).subscribe(
         (messageData) => {
           this.nbspeechs.push(nbspeech);
           this.nbspeechsAdd.next([...this.nbspeechs]);
           this.Message.emit(messageData.MOS);
         },
         error => { 
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  addFBEMdb(absoluteDelay: number,packetLoss: number, impairmentFactor: number,packetLossRobustness: number){
    const username = localStorage.getItem('theUser');
    const fbe: FullbandE = {absoluteDelay: absoluteDelay,packetLossProb: packetLoss,
      equipmentImpairmentFac: impairmentFactor, packetLossImpairmentFac:packetLossRobustness};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/eModelFullband"), fbe ,
       { headers }).subscribe(
         (messageData) => {
           this.fbes.push(fbe);
           this.fbesAdd.next([...this.fbes]);
           this.Message.emit(messageData.MOS);
         },
         error => { 
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  addWBEMdb(meanOneWayDelay: number, packetLossProb: number, talkerEchoLoudRating: number, equipmentImpairment: number,
    absoluteDelay: number, roundTripDelay: number, weightedEchoPathLoss: number, packetLossRobustness: number){
    const username = localStorage.getItem('theUser');
    const wbe: WidebandE = {meanOneWayDelay: meanOneWayDelay, packetLossProb: packetLossProb, talkerEchoLoudRating: talkerEchoLoudRating, 
      equipmentImpairment: equipmentImpairment, absoluteDelay: absoluteDelay, roundTripDelay: roundTripDelay, 
      weightedEchoPathLoss: weightedEchoPathLoss, packetLossRobustness: packetLossRobustness};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/eModelWideband"), wbe ,
       { headers }).subscribe(
         (messageData) => {
           this.wbes.push(wbe);
           this.wbesAdd.next([...this.wbes]);
           this.Message.emit(messageData.MOS);
         },
         error => { 
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  addNBEMdb(electricCircuitNoise: number, noiseFloor: number, roomNoiseS: number, roomNoiseR: number, sLoudnessRating: number, 
    rLoudnessRating: number, sidetoneMaskingRating: number, dFactorR: number, dFactorS: number, classDelaySensitivity:string, 
    meanOneWayDelay: number, absoluteDelay: number, roundTripDelay: number, talkerEchoLoudness: number, 
    weightedEchoPathLoss: number, qdu: number, equipmentImpairmentFac: number, packetLossRobustness: number,
    packetLossProb: number, burstRate: number, advantageFactor: number){
    const username = localStorage.getItem('theUser');
    const nbe: NarrowbandE = {electricCircuitNoise: electricCircuitNoise, noiseFloor: noiseFloor, roomNoiseS: roomNoiseS, 
      roomNoiseR: roomNoiseR, sLoudnessRating: sLoudnessRating, rLoudnessRating: rLoudnessRating, 
      sidetoneMaskingRating: sidetoneMaskingRating, dFactorR: dFactorR, dFactorS: dFactorS,
      classDelaySensitivity:classDelaySensitivity, meanOneWayDelay: meanOneWayDelay, absoluteDelay: absoluteDelay,
      roundTripDelay: roundTripDelay, talkerEchoLoudness: talkerEchoLoudness, weightedEchoPathLoss: weightedEchoPathLoss, qdu:qdu, 
      equipmentImpairmentFac: equipmentImpairmentFac, packetLossRobustness: packetLossRobustness, packetLossProb: packetLossProb, 
      burstRate: burstRate, advantageFactor: advantageFactor};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/eModelNarrowband"), nbe ,
       { headers }).subscribe(
         (messageData) => {
           this.nbes.push(nbe);
           this.nbesAdd.next([...this.nbes]);
           this.Message.emit(messageData.MOS);
         },
         error => { 
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  getWBSMUpdateListner(){
    return this.wbspeechsAdd.asObservable();
  }
  getNBSMUpdateListner(){
    return this.nbspeechsAdd.asObservable();
  }
  getFBEUpdateListner(){
    return this.fbesAdd.asObservable();
  }
  getWBEUpdateListner(){
    return this.wbesAdd.asObservable();
  }
  getNBEUpdateListner(){
    return this.nbesAdd.asObservable();
  }

}
