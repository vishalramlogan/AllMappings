import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {WebBrowsinService} from 'src/app/web-browsin.service';
import { WebBrowsingSA } from '../../webbrowsing.model'; 

@Component({
  selector: 'app-wb1-p-sa-est',
  templateUrl: './wb1-p-sa-est.component.html',
  styleUrls: ['./wb1-p-sa-est.component.scss']
})
export class Wb1PSaEstComponent implements OnInit {
  MessageSA: string[];
  
  constructor(public webbrowsingService:WebBrowsinService, private router: Router) { 
    this.webbrowsingService.MessageSA.subscribe(MOS =>{
      //let rounded = parseFloat(MOS).toFixed(2);
      this.MessageSA =MOS;
    });
  } 

  private webbrowsingsSub: Subscription;

  webbrowsings: WebBrowsingSA[] = [];

  ngOnInit(): void {
    this.webbrowsingsSub = this.webbrowsingService.getWeb1SAUpdateListner().subscribe((webbrowsings: WebBrowsingSA[])=>{
      this.webbrowsings = webbrowsings;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;  
    
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  } 

  navigateToWebBrowsing(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['web-browsing', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event) {
    event.preventDefault();
    const target = event.target;
    const expectedSessionTime: number[] = [];
    const sessionTime: number[] = [];
    expectedSessionTime[0] = target.querySelector('#expectedSessionTime1').value;
    expectedSessionTime[1] = target.querySelector('#expectedSessionTime2').value;
    expectedSessionTime[2] = target.querySelector('#expectedSessionTime3').value;
    expectedSessionTime[3] = target.querySelector('#expectedSessionTime4').value;
    expectedSessionTime[4] = target.querySelector('#expectedSessionTime5').value;
    sessionTime[0] = target.querySelector('#sessionTime').value;
  
    this.webbrowsingService.addWB1PSSAdb(expectedSessionTime, sessionTime);    
  }

  ngOnDestroy(){
    this.webbrowsingsSub.unsubscribe();
  }

}

