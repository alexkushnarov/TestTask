import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Services
import { TeamLineupService } from './team-lineup.service';


@Component({
  selector: 'app-team-lineup',
  templateUrl: './team-lineup.component.html',
  styleUrls: ['./team-lineup.component.css']
})
export class TeamLineupComponent implements OnInit {
  private routeSubscription: Subscription;
  teamNameValue: string;
  teamLineup: any;
  bullpenTableActive = false;
  benchTableActive = false;
  // Tab Buttons States
  // ------------------
  currentTeamTabActive = true;
  opposingTeamTabActive = false;
  matchupTabActive = false;
  newsTabActive = false;
  dataMiningTabActive = false;
  rosterTabActive = false;
  scheduleTabActive = false;

  yearOptions = [
    2017,
    2016,
    2015,
    2014,
    2013,
    2012
  ];

  selectedYear = 2017;

  constructor(
    private teamLineupService: TeamLineupService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.teamNameValue = params['team_name'];
    });
  }

  ngOnInit() {
    // Initialize Page w/ Data
    this.teamLineupService.mlbTeamLineup(this.teamNameValue)
      .subscribe(teamLineup => {
        console.log(teamLineup);
        return this.teamLineup = teamLineup;
      });
  }

  onOpenBullpenTable() {
    this.bullpenTableActive = !this.bullpenTableActive;
    console.log('Bullpen State: ' + this.bullpenTableActive);
  }

  onOpenBenchTable() {
    this.benchTableActive = !this.benchTableActive;
    console.log('Bench state: ' + this.benchTableActive);
  }

  onSelectCurrentTeamTab() {
    this.currentTeamTabActive = true;
    this.opposingTeamTabActive = false;
    this.matchupTabActive = false;
    this.newsTabActive = false;
    this.dataMiningTabActive = false;
    this.rosterTabActive = false;
    this.scheduleTabActive = false;
  }

  onSelectOpposingTeamTab() {
    this.currentTeamTabActive = false;
    this.opposingTeamTabActive = true;
    this.matchupTabActive = false;
    this.newsTabActive = false;
    this.dataMiningTabActive = false;
    this.rosterTabActive = false;
    this.scheduleTabActive = false;
  }

}
