import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamLineupService} from "../team-lineup.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-current-team-lineup',
  templateUrl: './current-team-lineup.component.html',
  styleUrls: ['./current-team-lineup.component.css']
})
export class CurrentTeamLineupComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  teamLineup: any;
  teamNameValue: string;
  // Lineups Stat Table Button States
  bullpenTableActive = false;
  benchTableActive = false;
  // Page Year Values
  yearOptions: number[] = [];
  currentYear: number = new Date().getFullYear();
  activeYear: number;

  constructor(
    private router: Router,
    private teamLineupService: TeamLineupService,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.teamNameValue = params['team_name'];
      this.activeYear = params['active_year'];
    });

    // set date list
    for (let i = 0; i < 10; i++) {
      this.yearOptions.push(this.currentYear - i);
    }
  }

  ngOnInit() {
    // Initialize Page w/ Data
    this.teamLineupService.mlbTeamLineup(this.teamNameValue, this.activeYear)
      .subscribe(teamLineup => {
        return this.teamLineup = teamLineup;
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }


  onChangeYear(selectedYear) {
    this.activeYear = selectedYear;
    this.router.navigateByUrl(`/mlb/lineups/${this.activeYear}/${this.teamNameValue}`);
    // TODO: Make new api request
  }

  // UI Functions
  // --------------
  /**
   *  Open/Close Bullpen Table - onOpenBullpenTable()
   *  -----------------------------------------------
   */
  onOpenBullpenTable() {
    this.bullpenTableActive = !this.bullpenTableActive;
  }

  /**
   *  Open/Close Bullpen Table - onOpenBullpenTable()
   *  -----------------------------------------------
   */
  onOpenBenchTable() {
    this.benchTableActive = !this.benchTableActive;
  }

}
