import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScheduleGatewayService} from "./schedule-gateway.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-schedule-gateway',
  templateUrl: './schedule-gateway.component.html',
  styleUrls: ['./schedule-gateway.component.css']
})
export class ScheduleGatewayComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  scheduleGateway: any;
  date: string;

  constructor(
    private router: Router,
    private scheduleGatewayService: ScheduleGatewayService,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      if ('date' in params) {
        this.date = params['date'];
      } else {
        const d = new Date();
        this.date = d.getDay() + '-' +(d.getMonth() + 1)  + '-' + d.getFullYear();
      }
    });

  }

  ngOnInit() {
    // Initialize Page w/ Data
    this.scheduleGatewayService.mlbScheduleGateway(this.date)
      .subscribe(scheduleGateway => {
        return this.scheduleGateway = scheduleGateway;
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }


  // onChangeYear(selectedYear) {
  //   this.activeYear = selectedYear;
  //   this.router.navigateByUrl(`/mlb/lineups/${this.activeYear}/${this.teamNameValue}`);
  //   // TODO: Make new api request
  // }
  //

}
