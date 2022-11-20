import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import * as fr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './snap-list/face-snap-card/face-snap.component';
import { SnapListComponent } from './snap-list/snap-list.component';
import { HeaderComponent } from './header/header.component';
import { appRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSnapComponent } from './single-snap/single-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSnapComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    registerLocaleData(fr.default)
  }
 }
