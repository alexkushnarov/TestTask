import {Component, OnDestroy, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Services
import { TeamLineupService } from './team-lineup.service';

@Component({
  selector: 'app-team-lineup',
  templateUrl: './team-lineup.component.html',
  styleUrls: ['./team-lineup.component.css']
})
export class TeamLineupComponent implements OnInit, OnDestroy {
  // Initialize Subscription to Route
  private routeSubscription: Subscription;
  teamNameParam: string;
  teamLineup: any;
  // Lineups Tab Button States
  currentTeamTabActive: boolean;
  opposingTeamTabActive: boolean;
  currentTeamIsHome: boolean;
  // Page Year Values
  activeYear: number;
  // Header Area Btn Groups
  btnGroupOneCurrentValue: any;
  btnGroupTwoCurrentValue: any;
  btnGroupThreeCurrentValue: any;
  btnGroupOneOpts = [
    {
      label: 'Stats',
      id: 1
    },
    {
      label: 'Fantasy',
      id: 2
    }
  ];
  btnGroupTwoOpts = [
    {
      label: 'Average',
      id: 1
    },
    {
      label: 'Base Model',
      id: 2
    },
    {
      label: 'Logistic Regression',
      id: 3
    },
    {
      label: 'Random Forest',
      id: 4
    },
    {
      label: 'Naive Bayes',
      id: 5
    },
    {
      label: 'Nearest Neighbors',
      id: 6
    },
    {
      label: 'ML Consensus',
      id: 7
    }
  ];

  btnGroupThreeOpts = [
    {
      label: 'Last 10',
      id: 1
    },
    {
      label: 'Last 30',
      id: 2
    },
    {
      label: 'Last 60',
      id: 3
    },
    {
      label: '1 Year',
      id: 4
    },
    {
      label: 'All Time',
      id: 5
    },
    {
      label: 'BvP',
      id: 6
    },
    {
      label: 'Advanced Stats',
      id: 7
    },
    {
      label: 'Home/Away',
      id: 8
    },
    {
      label: 'L/R',
      id: 9
    }
  ];

  constructor(
    private teamLineupService: TeamLineupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    // Set Dropdown Values
    this.btnGroupOneCurrentValue = this.btnGroupOneOpts[0];
    this.btnGroupTwoCurrentValue = this.btnGroupTwoOpts[0];
    this.btnGroupThreeCurrentValue = this.btnGroupThreeOpts[0];
    // Make Subscription to the Active Route
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      // Set Router Param Dependent Values
      this.teamNameParam = params['team_name'];
      this.activeYear = params['active_year'];
      // Set Tab Menu Active Button
      const currentTeamRoute = '/mlb/lineups/' + this.activeYear + '/' + this.teamNameParam;
      const opposingTeamRoute = '/mlb/lineups/' + this.activeYear + '/' + this.teamNameParam + '/opposing-team';
      if (this.router.url === currentTeamRoute) {
        this.currentTeamTabActive = true;
        this.opposingTeamTabActive = false;
      } else if (this.router.url === opposingTeamRoute) {
        this.currentTeamTabActive = false;
        this.opposingTeamTabActive = true;
      }
    });
  }

  // Lifecycle Hooks
  // ---------------
  ngOnInit() {
    // Initialize Page w/ Data
    this.teamLineupService.mlbTeamLineup(this.teamNameParam, this.activeYear)
      .subscribe(teamLineup => {
        // Set Page Title
        const teamNameValue = teamLineup.team.current_game_info.team_name;
        const pageTitle = `${teamNameValue} Starting Lineup Today ${this.activeYear}`;
        this.titleService.setTitle(pageTitle);
        // Determine whether a team is home or away
        if (teamLineup.team.current_game_info.at_or_vs === 'vs') {
          this.currentTeamIsHome = true;
        } else {
          this.currentTeamIsHome = false;
        }
        // Set teamLineup Variable to service result
        return this.teamLineup = teamLineup;
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  /**
   *  Open/Close Bullpen Table - onOpenBullpenTable()
   *  -----------------------------------------------
   */
  onSelectHomeTeam() {
    this.teamLineup = undefined;
    this.currentTeamTabActive = false;
    this.opposingTeamTabActive = true;
    this.router.navigate(['/mlb/lineups/' + this.activeYear + '/' + 'cleveland-indians']);
    this.teamLineupService.mlbTeamLineup('cleveland-indians', this.activeYear)
      .subscribe(teamLineup => {
        // Set Page Title to New Team
        const teamNameValue = teamLineup.team.current_game_info.team_name;
        const pageTitle = `${teamNameValue} Starting Lineup Today ${this.activeYear}`;
        this.titleService.setTitle(pageTitle);
        // Determine whether a team is home or away
        if (teamLineup.team.current_game_info.at_or_vs === 'vs') {
          this.currentTeamIsHome = true;
        } else {
          this.currentTeamIsHome = false;
        }
        // Set teamLineup Variable to service result
        return this.teamLineup = teamLineup;
      });
  }

  /**
   *  Open/Close Bullpen Table - onOpenBullpenTable()
   *  -----------------------------------------------
   */
  onSelectAwayTeam() {
    this.teamLineup = undefined;
    this.currentTeamTabActive = false;
    this.opposingTeamTabActive = true;
    this.router.navigate(['/mlb/lineups/' + this.activeYear + '/' + 'boston-red-sox']);
    this.teamLineupService.mlbTeamLineup('boston-red-sox', this.activeYear)
      .subscribe(teamLineup => {
        // Set Page Title to New Team
        const teamNameValue = teamLineup.team.current_game_info.team_name;
        const pageTitle = `${teamNameValue} Starting Lineup Today ${this.activeYear}`;
        this.titleService.setTitle(pageTitle);
        // Determine whether a team is home or away
        if (teamLineup.team.current_game_info.at_or_vs === 'vs') {
          this.currentTeamIsHome = true;
        } else {
          this.currentTeamIsHome = false;
        }
        // Set teamLineup Variable to service result
        return this.teamLineup = teamLineup;
      });
  }

  onSelectBtnGroupOneOpt(opt) {
    this.btnGroupOneCurrentValue = opt;
  }

  onSelectBtnGroupTwoOpt(opt) {
    this.btnGroupTwoCurrentValue = opt;
  }

  onSelectBtnGroupThreeOpt(opt) {
    this.btnGroupThreeCurrentValue = opt;
  }
}
