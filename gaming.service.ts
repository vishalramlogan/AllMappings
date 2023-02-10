import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Gaming } from './gaming.model'; 
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GamingService {

  private gamings: Gaming[] = [];
  private gamingsAdd = new Subject<Gaming[]>();

  private token: string;
  Message = new EventEmitter<string>();  

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
  }

  addGMdb(bitrate: number, numPixelsPerVideo: number, packetLoss: number, encodingFrameRate: number, lossSensitivityClass: string,
    encodingComplexity: string, delay: number){
    const username = localStorage.getItem('theUser');
    const gaming: Gaming = {bitrate: bitrate, numPixelsPerVideo: numPixelsPerVideo, packetLoss: packetLoss,
      encodingFrameRate: encodingFrameRate, lossSensitivityClass: lossSensitivityClass, encodingComplexity: encodingComplexity,
      delay: delay};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/gaming"), gaming ,
       { headers }).subscribe(
         (messageData) => {
           this.gamings.push(gaming);
           this.gamingsAdd.next([...this.gamings]);
           this.Message.emit(messageData.MOS);
         },
         error => {
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  } 

  getGamingUpdateListner(){
    return this.gamingsAdd.asObservable();
  }
} 
 
