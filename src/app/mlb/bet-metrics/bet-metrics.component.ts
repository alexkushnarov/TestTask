import {Component, OnDestroy, OnInit} from '@angular/core';
import {BetMetricsService} from './bet-metrics.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-bet-metrics',
  templateUrl: './bet-metrics.component.html',
  styleUrls: ['./bet-metrics.component.css']
})
export class BetMetricsComponent implements OnInit {
  private routeSubscription: Subscription;
  betMetrics: any = {'bets': []};
  bet_type: number;
  model: string;
  outcome: number;
  win_prob_min: number;
  win_prob_max: number;
  ev_min: number;
  ev_max: number;
  scale: boolean;
  length: number;

  constructor(private router: Router,
              private betMetricsService: BetMetricsService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.bet_type = 0;
    this.model = 'nn';
    this.outcome = 1;
    this.win_prob_max = 0;
    this.win_prob_min = 0;
    this.ev_max = 1;
    this.ev_min = 0;
    this.scale = true;
    this.betMetricsService.mlbBetMetrics(this.bet_type, this.model, this.outcome, this.win_prob_max, this.win_prob_min,
      this.ev_max, this.ev_min, this.scale)
      .subscribe(betMetrics => {
        this.length = betMetrics.bets.length;
        return this.betMetrics = betMetrics;
      });
  }




  // onChangeYear(selectedYear) {
  //   this.activeYear = selectedYear;
  //   this.router.navigateByUrl(`/mlb/lineups/${this.activeYear}/${this.teamNameValue}`);
  //   // TODO: Make new api request
  // }
  //

}
