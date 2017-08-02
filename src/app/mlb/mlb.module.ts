import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineupsGatewayComponent } from './lineups-gateway/lineups-gateway.component';
import { TeamLineupComponent } from './team-lineup/team-lineup.component';


// Services
import { LineupsGatewayService } from './lineups-gateway/lineups-gateway.service';
import { SlickModule } from 'ngx-slick';
import { Logger } from 'angular2-logger/core';
import { TeamLineupService } from './team-lineup/team-lineup.service';


const mlbRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'mlb/lineups-gateway',
    component: LineupsGatewayComponent
  },
  {
    path: 'mlb/team-lineup/:team_name',
    component: TeamLineupComponent
  }
]);


@NgModule({
  declarations: [
    LineupsGatewayComponent,
    TeamLineupComponent
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [
    Logger,
    LineupsGatewayService,
    TeamLineupService
  ]
})
export class MlbModule { }
