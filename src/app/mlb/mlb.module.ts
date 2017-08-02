import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineupsGatewayComponent } from './lineups-gateway/lineups-gateway.component';
<<<<<<< HEAD
=======
import { TeamLineupComponent } from './team-lineup/team-lineup.component';
import { CurrentTeamLineupComponent } from './team-lineup/current-team-lineup/current-team-lineup.component';
import { MatchupsComponent } from './matchups/matchups.component';
>>>>>>> team-lineups

// Services
import { LineupsGatewayService } from './lineups-gateway/lineups-gateway.service';
import { SlickModule } from 'ngx-slick';
import { Logger } from 'angular2-logger/core';
<<<<<<< HEAD


const mlbRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'lineups-gateway',
    component: LineupsGatewayComponent
=======
import { TeamLineupService } from './team-lineup/team-lineup.service';

const mlbRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'mlb/lineups-gateway',
    component: LineupsGatewayComponent
  },
  {
    path: 'mlb/lineups/:active_year/:team_name',
    component: TeamLineupComponent,
    children: [
      {
        path: '',
        component: CurrentTeamLineupComponent
      }
    ]
>>>>>>> team-lineups
  }
]);


@NgModule({
  declarations: [
<<<<<<< HEAD
    LineupsGatewayComponent
=======
    LineupsGatewayComponent,
    TeamLineupComponent,
    CurrentTeamLineupComponent,
    MatchupsComponent
>>>>>>> team-lineups
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [
    Logger,
<<<<<<< HEAD
    LineupsGatewayService
=======
    LineupsGatewayService,
    TeamLineupService
>>>>>>> team-lineups
  ]
})
export class MlbModule { }
