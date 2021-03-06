import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LineupsGatewayComponent} from './lineups-gateway/lineups-gateway.component';
import {TeamLineupComponent} from './team-lineup/team-lineup.component';
import {CurrentTeamLineupComponent} from './team-lineup/current-team-lineup/current-team-lineup.component';
import {ScheduleGatewayComponent} from './schedule-gateway/schedule-gateway.component';
import {BetPredictorComponent} from './bet-predictor/bet-predictor.component';
import {GamePredictorComponent} from './game-predictor/game-predictor.component';
import {BetMetricsComponent} from './bet-metrics/bet-metrics.component';


// Services
import {LineupsGatewayService} from './lineups-gateway/lineups-gateway.service';
import {Logger} from 'angular2-logger/core';
import {TeamLineupService} from './team-lineup/team-lineup.service';
import {ScheduleGatewayService} from './schedule-gateway/schedule-gateway.service';
import {BetMetricsService} from './bet-metrics/bet-metrics.service';
import { MatchupsComponent } from './matchups-gateway/matchups-gateway.component';
import { MatchupsGatewayService } from './matchups-gateway/matchups-gateway.service';
import { MatchupComponent } from './matchups-gateway/matchup/matchup.component';
import { SharedModule } from '../shared/shared.module';

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
  },
  {
    path: 'mlb/schedule',
    component: ScheduleGatewayComponent
  },
  {
    path: 'mlb/bet-metrics',
    component: BetMetricsComponent
  },
  {
    path: 'mlb/matchups',
    component: MatchupsComponent
  },
]);


@NgModule({
  declarations: [
    LineupsGatewayComponent,
    TeamLineupComponent,
    CurrentTeamLineupComponent,
    MatchupsComponent,
    ScheduleGatewayComponent,
    BetMetricsComponent,
    BetPredictorComponent,
    GamePredictorComponent,
    MatchupComponent
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [
    Logger,
    LineupsGatewayService,
    TeamLineupService,
    ScheduleGatewayService,
    BetMetricsService,
    MatchupsGatewayService
  ]
})
export class MlbModule {
}
