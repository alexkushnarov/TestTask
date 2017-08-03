import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineupsGatewayComponent } from './lineups-gateway/lineups-gateway.component';
import { TeamLineupComponent } from './team-lineup/team-lineup.component';
import { CurrentTeamLineupComponent } from './team-lineup/current-team-lineup/current-team-lineup.component';
import { MatchupsComponent } from './matchups/matchups.component';


// Services
import { LineupsGatewayService } from './lineups-gateway/lineups-gateway.service';
import { Logger } from 'angular2-logger/core';
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

  }
]);


@NgModule({
  declarations: [
    LineupsGatewayComponent,
    TeamLineupComponent,
    CurrentTeamLineupComponent,
    MatchupsComponent
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
  ],
  providers: [
    Logger,
    LineupsGatewayService,
    TeamLineupService
  ]
})
export class MlbModule { }
