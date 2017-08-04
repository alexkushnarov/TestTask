import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MlbModule } from './mlb/mlb.module';

import { Logger } from 'angular2-logger/core';
import {
  ApiService,
  FooterComponent,
  HeaderComponent,
  ScorebarComponent,
  SharedModule,
  ScorebarService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ScorebarComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    rootRouting,
    SharedModule,
    NgbModule.forRoot(),
    MlbModule
  ],
  providers: [
    ApiService,
    ScorebarService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
