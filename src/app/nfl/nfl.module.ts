import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BetPredictorComponent } from './bet-predictor/bet-predictor.component';
import { GamePredictorComponent } from './game-predictor/game-predictor.component';

// Services
import { Logger } from 'angular2-logger/core';

const mlbRouting: ModuleWithProviders = RouterModule.forChild([
]);


@NgModule({
  declarations: [
    BetPredictorComponent,
    GamePredictorComponent
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
  ],
  providers: [
    Logger
  ]
})
export class NflModule { }
