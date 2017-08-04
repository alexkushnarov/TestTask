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
  selector: 'app-layout-scorebar',
  templateUrl: './scorebar.component.html',
  styleUrls: ['./scorebar.component.css']
})
export class ScorebarComponent implements OnInit {
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
      .debounceTime(200);
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
          this.scorebar.sort((a, b) => {
            if (a.date_time_epoch < b.date_time_epoch) {
              return -1;
            }
            if (a.date_time_epoch > b.date_time_epoch) {
              return 1;
            }
            return 0;
          });
          this.gameLength = Object.keys(this.scorebar).length;
        }
      );
  }
}
