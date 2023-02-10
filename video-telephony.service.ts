import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Video} from './video-telephony.model'; 
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VideoTelephonyService {

  private videos: Video[] = [];
  private videosAdd = new Subject<Video[]>();

  private token: string;
  Message = new EventEmitter<string>();  

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
  }

  addVTMdb(videoPacketLoss: number, videoFrameRate: number, videoBitRate: number, combinationVT: number){
    const username = localStorage.getItem('theUser');
    const video: Video = {videoPacketLoss: videoPacketLoss, videoFrameRate: videoFrameRate, videoBitRate: videoBitRate,
      combinationVT: combinationVT};
    const headers = {'Authorization': `Bearer ${this.token}`};

       this.http.post<{MOS: string}>(("http://localhost:3000/api/users/"+username+"/videoTelephony"), video ,
       { headers }).subscribe(
         (messageData) => {
           this.videos.push(video);
           this.videosAdd.next([...this.videos]);
           this.Message.emit(messageData.MOS);
         },
         error => {
           if (error.status != 200) {
             alert(error.error.message);
           }
         }
       );
  }

  getVTMUpdateListner(){
    return this.videosAdd.asObservable();
  }
}
 