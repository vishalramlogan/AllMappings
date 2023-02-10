import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { VoiceTelHPComponent } from './pages/voice-tel-hp/voice-tel-hp.component';
import { VideoTelHPComponent } from './pages/video-tel-hp/video-tel-hp.component';
import { WebBrowsingHPComponent } from './pages/web-browsing-hp/web-browsing-hp.component';
import { AudioStrHPComponent } from './pages/audio-str-hp/audio-str-hp.component';
import { VideoStrHPComponent } from './pages/video-str-hp/video-str-hp.component';
import { GamingHPComponent } from './pages/gaming-hp/gaming-hp.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HomepageUserComponent } from './pages/homepage-user/homepage-user.component';
import { IntroductionUserComponent } from './pages/introduction-user/introduction-user.component';
import { WB2PMComponent } from './pages/wb2-p-m/wb2-p-m.component';
import { WB1PMComponent } from './pages/wb1-p-m/wb1-p-m.component';
import { WBSTEMComponent } from './pages/wbste-m/wbste-m.component';
import { VoiceWbMComponent } from './pages/voice-wb-m/voice-wb-m.component';
import { VoiceNbMComponent } from './pages/voice-nb-m/voice-nb-m.component';
import { VoiceWbEComponent } from './pages/voice-wb-e/voice-wb-e.component';
import { VoiceNbEComponent } from './pages/voice-nb-e/voice-nb-e.component';
import { VoiceFbEComponent } from './pages/voice-fb-e/voice-fb-e.component';
import { VideoMComponent } from './pages/video-m/video-m.component';
import { AudioSHrMComponent } from './pages/audio-s-hr-m/audio-s-hr-m.component';
import { AudioSLrMComponent } from './pages/audio-s-lr-m/audio-s-lr-m.component';
import { VideoSHrMComponent } from './pages/video-s-hr-m/video-s-hr-m.component';
import { VideoSLrMComponent } from './pages/video-s-lr-m/video-s-lr-m.component';
import { GamingMComponent } from './pages/gaming-m/gaming-m.component';
import { Wb1PSaEstComponent } from './pages/wb1-p-sa-est/wb1-p-sa-est.component';
import { Wb1PSaStComponent } from './pages/wb1-p-sa-st/wb1-p-sa-st.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroductionComponent,
    ErrorPageComponent,
    VoiceTelHPComponent,
    VideoTelHPComponent,
    WebBrowsingHPComponent,
    AudioStrHPComponent,
    VideoStrHPComponent,
    GamingHPComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    PasswordResetComponent,
    UserProfileComponent,
    HomepageUserComponent,
    IntroductionUserComponent,
    WB2PMComponent,
    WB1PMComponent,
    WBSTEMComponent,
    VoiceWbMComponent,
    VoiceNbMComponent,
    VoiceWbEComponent,
    VoiceNbEComponent,
    VoiceFbEComponent,
    VideoMComponent,
    AudioSHrMComponent,
    AudioSLrMComponent,
    VideoSHrMComponent,
    VideoSLrMComponent,
    GamingMComponent,
    Wb1PSaEstComponent,
    Wb1PSaStComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: HomepageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'users', component: PasswordResetComponent},
      {path:':username', component: HomepageUserComponent},
      {path:'introduction', component: IntroductionComponent},
      {path:'introduction/:username', component: IntroductionUserComponent},
      {path: 'voiceTelephony/:username', component: VoiceTelHPComponent},
      {path: 'videoTelephony/:username', component: VideoTelHPComponent},
      {path: 'web-browsing/:username', component: WebBrowsingHPComponent},
      {path: 'audioStreaming/:username', component: AudioStrHPComponent},
      {path: 'videoStreaming/:username', component: VideoStrHPComponent},
      {path: 'gaming/:username', component: GamingHPComponent},
      {path: 'usersinfo/:username', component: UserProfileComponent},
      {path: 'users/:username/web1PageSession', component: WB1PMComponent},
      {path: 'users/:username/web1PageSession/ExpectedSessionTimeSA', component: Wb1PSaEstComponent},
      {path: 'users/:username/web2PageSession', component: WB2PMComponent},
      {path: 'users/:username/webSingleTimingEvent', component: WBSTEMComponent},
      {path: 'users/:username/voiceTelephonyNarrowband', component: VoiceNbMComponent},
      {path: 'users/:username/voiceTelephonyWideband', component: VoiceWbMComponent},
      {path: 'users/:username/eModelFullband', component: VoiceFbEComponent},
      {path: 'users/:username/eModelNarrowband', component: VoiceNbEComponent},
      {path: 'users/:username/eModelWideband', component: VoiceWbEComponent},
      {path: 'users/:username/videoTelephony', component: VideoMComponent},
      {path: 'users/:username/audioStreamingHigherResolution', component: AudioSHrMComponent},
      {path: 'users/:username/audioStreamingLowerResolution', component: AudioSLrMComponent},
      {path: 'users/:username/videoStreamingHigherResolution', component: VideoSHrMComponent},
      {path: 'users/:username/videoStreamingLowerResolution', component: VideoSLrMComponent},
      {path: 'users/:username/gaming', component: GamingMComponent},
      {path:'**', component: ErrorPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
