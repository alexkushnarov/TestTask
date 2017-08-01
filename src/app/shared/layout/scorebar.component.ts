import {Component, OnInit} from '@angular/core';
import { ScorebarService } from '../services';
import { DatePipe } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'layout-scorebar',
  templateUrl: './scorebar.component.html',
  styleUrls: ['./scorebar.component.css']
})
export class ScorebarComponent implements OnInit{
  scorebar: any[];
  gameLength: number;
  width = document.documentElement.clientWidth;
  showAmount: number = this.width / 140;
  constructor(
    private scorebarService: ScorebarService,
    config: NgbCarouselConfig
  ) {
    const $resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
      })
      .debounceTime(200)
    $resizeEvent.subscribe(data => {
      this.width = data;
      this.showAmount = data / 150;

    });
    config.interval = 1000000;
    config.keyboard = false;
  }

  ngOnInit() {
    this.scorebarService.getAll()
    .subscribe(scorebar => {
        this.scorebar = scorebar;
        // this.scorebar = [{"id": 27105, "date_time_epoch": 1501542300.0, "home_team": "BAL", "away_team": "KC", "date_time": "2017-07-31T23:05:00+00:00", "away_losses": 48, "home_team_id": 19, "status": "Scheduled", "game_id": 49119, "home_losses": 54, "away_team_id": 5, "away_wins": 55, "home_wins": 50}, {"id": 27106, "date_time_epoch": 1501542480.0, "home_team": "BOS", "away_team": "CLE", "date_time": "2017-07-31T23:08:00+00:00", "away_losses": 46, "home_team_id": 25, "status": "Scheduled", "game_id": 49120, "home_losses": 49, "away_team_id": 10, "away_wins": 57, "home_wins": 57}, {"id": 27107, "date_time_epoch": 1501546200.0, "home_team": "CHW", "away_team": "TOR", "date_time": "2017-08-01T00:10:00+00:00", "away_losses": 56, "home_team_id": 16, "status": "Scheduled", "game_id": 49121, "home_losses": 62, "away_team_id": 3, "away_wins": 49, "home_wins": 40}, {"id": 27108, "date_time_epoch": 1501542300.0, "home_team": "NYY", "away_team": "DET", "date_time": "2017-07-31T23:05:00+00:00", "away_losses": 56, "home_team_id": 29, "status": "Scheduled", "game_id": 49122, "home_losses": 47, "away_team_id": 17, "away_wins": 47, "home_wins": 56}, {"id": 27109, "date_time_epoch": 1501553100.0, "home_team": "OAK", "away_team": "SF", "date_time": "2017-08-01T02:05:00+00:00", "away_losses": 66, "home_team_id": 24, "status": "Scheduled", "game_id": 49123, "home_losses": 59, "away_team_id": 15, "away_wins": 40, "home_wins": 46}, {"id": 27110, "date_time_epoch": 1501545900.0, "home_team": "TEX", "away_team": "SEA", "date_time": "2017-08-01T00:05:00+00:00", "away_losses": 53, "home_team_id": 28, "status": "Scheduled", "game_id": 49124, "home_losses": 54, "away_team_id": 13, "away_wins": 53, "home_wins": 50}, {"id": 27111, "date_time_epoch": 1501546200.0, "home_team": "HOU", "away_team": "TB", "date_time": "2017-08-01T00:10:00+00:00", "away_losses": 52, "home_team_id": 30, "status": "Scheduled", "game_id": 49125, "home_losses": 36, "away_team_id": 11, "away_wins": 54, "home_wins": 68}, {"id": 27112, "date_time_epoch": 1501542600.0, "home_team": "MIA", "away_team": "WSH", "date_time": "2017-07-31T23:10:00+00:00", "away_losses": 41, "home_team_id": 22, "status": "Scheduled", "game_id": 49126, "home_losses": 54, "away_team_id": 35, "away_wins": 62, "home_wins": 49}, {"id": 27113, "date_time_epoch": 1501518900.0, "home_team": "PHI", "away_team": "ATL", "date_time": "2017-07-31T16:35:00+00:00", "away_losses": 56, "home_team_id": 12, "status": "Final", "game_id": 49127, "home_losses": 64, "away_team_id": 26, "away_wins": 48, "home_wins": 39},{"id": 27105, "date_time_epoch": 1501542300.0, "home_team": "BAL", "away_team": "KC", "date_time": "2017-07-31T23:05:00+00:00", "away_losses": 48, "home_team_id": 19, "status": "Scheduled", "game_id": 49119, "home_losses": 54, "away_team_id": 5, "away_wins": 55, "home_wins": 50}, {"id": 27106, "date_time_epoch": 1501542480.0, "home_team": "BOS", "away_team": "CLE", "date_time": "2017-07-31T23:08:00+00:00", "away_losses": 46, "home_team_id": 25, "status": "Scheduled", "game_id": 49120, "home_losses": 49, "away_team_id": 10, "away_wins": 57, "home_wins": 57}, {"id": 27107, "date_time_epoch": 1501546200.0, "home_team": "CHW", "away_team": "TOR", "date_time": "2017-08-01T00:10:00+00:00", "away_losses": 56, "home_team_id": 16, "status": "Scheduled", "game_id": 49121, "home_losses": 62, "away_team_id": 3, "away_wins": 49, "home_wins": 40}, {"id": 27108, "date_time_epoch": 1501542300.0, "home_team": "NYY", "away_team": "DET", "date_time": "2017-07-31T23:05:00+00:00", "away_losses": 56, "home_team_id": 29, "status": "Scheduled", "game_id": 49122, "home_losses": 47, "away_team_id": 17, "away_wins": 47, "home_wins": 56}, {"id": 27109, "date_time_epoch": 1501553100.0, "home_team": "OAK", "away_team": "SF", "date_time": "2017-08-01T02:05:00+00:00", "away_losses": 66, "home_team_id": 24, "status": "Scheduled", "game_id": 49123, "home_losses": 59, "away_team_id": 15, "away_wins": 40, "home_wins": 46}, {"id": 27110, "date_time_epoch": 1501545900.0, "home_team": "TEX", "away_team": "SEA", "date_time": "2017-08-01T00:05:00+00:00", "away_losses": 53, "home_team_id": 28, "status": "Scheduled", "game_id": 49124, "home_losses": 54, "away_team_id": 13, "away_wins": 53, "home_wins": 50}, {"id": 27111, "date_time_epoch": 1501546200.0, "home_team": "HOU", "away_team": "TB", "date_time": "2017-08-01T00:10:00+00:00", "away_losses": 52, "home_team_id": 30, "status": "Scheduled", "game_id": 49125, "home_losses": 36, "away_team_id": 11, "away_wins": 54, "home_wins": 68}, {"id": 27112, "date_time_epoch": 1501542600.0, "home_team": "MIA", "away_team": "WSH", "date_time": "2017-07-31T23:10:00+00:00", "away_losses": 41, "home_team_id": 22, "status": "Scheduled", "game_id": 49126, "home_losses": 54, "away_team_id": 35, "away_wins": 62, "home_wins": 49}, {"id": 27113, "date_time_epoch": 1501518900.0, "home_team": "PHI", "away_team": "ATL", "date_time": "2017-07-31T16:35:00+00:00", "away_losses": 56, "home_team_id": 12, "status": "Final", "game_id": 49127, "home_losses": 64, "away_team_id": 26, "away_wins": 48, "home_wins": 39}];
        this.scorebar.sort((a, b) => {
          if (a.date_time_epoch < b.date_time_epoch) return -1;
          else if (a.date_time_epoch > b.date_time_epoch) return 1;
          else return 0;
        });
        this.gameLength = Object.keys(this.scorebar).length;
      }
    );
  }



}
