import { Component, OnInit } from '@angular/core';

import { LineupsGatewayService } from './lineups-gateway.service';

@Component({
  selector: 'app-lineups-gateway',
  templateUrl: './lineups-gateway.component.html',
  styleUrls: ['./lineups-gateway.component.css']
})
export class LineupsGatewayComponent implements OnInit {
  lineups: any[];
  // Action Header Menu Button States
  // --------------------------------
  // Button Group 1
  sportActionActive = false;
  bettingActionActive = false;
  fantasyActionActive = true;
  // Button Group 2
  draftKingsActionActive = true;
  fanDuelActionActive = false;
  yahooActionActive = false;
  // Button Group 3
  averageActionActive = false;
  basePredictionActionActive = false;
  mlConsensusActionActive = false;
  linearRegressionActionActive = false;
  boostedRegressorActionActive = true;
  randomForestActionActive = false;
  naiveBayesActionActive = false;

  constructor(
    private lineupsGatewayService: LineupsGatewayService
  ) {}

  ngOnInit() {
    // Initialize Page with Data
    this.lineupsGatewayService.mlbStartingLineups()
      .subscribe(lineupsData => {
        this.lineups = lineupsData;
        this.lineups.sort((a, b) => {
          if (a.date_time_epoch < b.date_time_epoch) return -1;
          else if (a.date_time_epoch > b.date_time_epoch) return 1;
          else return 0;
        });
      });
  }

  // Action Header Menu Button Click Listeners
  // -----------------------------------------
  // Button Group 1 Actions
  onSportAction() {
    this.sportActionActive = true;
    this.bettingActionActive = false;
    this.fantasyActionActive = false;
  }

  onBettingAction() {
    this.bettingActionActive = true;
    this.sportActionActive = false;
    this.fantasyActionActive = false;
  }

  onFantasyAction() {
    this.fantasyActionActive = true;
    this.sportActionActive = false;
    this.bettingActionActive = false;
  }
  // Button Group 2 Actions
  onDraftKingsAction() {
    this.draftKingsActionActive = true;
    this.fanDuelActionActive = false;
    this.yahooActionActive = false;
  }

  onFanDuelAction() {
    this.fanDuelActionActive = true;
    this.draftKingsActionActive = false;
    this.yahooActionActive = false;
  }

  onYahooAction() {
    this.yahooActionActive = true;
    this.draftKingsActionActive = false;
    this.fanDuelActionActive = false;
  }
  // Button Group 3 Actions
  onAverageAction() {
    this.averageActionActive = true;
    this.basePredictionActionActive = false;
    this.mlConsensusActionActive = false;
    this.linearRegressionActionActive = false;
    this.boostedRegressorActionActive = false;
    this.randomForestActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onBasePredictionAction() {
    this.basePredictionActionActive = true;
    this.averageActionActive = false;
    this.mlConsensusActionActive = false;
    this.linearRegressionActionActive = false;
    this.boostedRegressorActionActive = false;
    this.randomForestActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onMlConsensusAction() {
    this.mlConsensusActionActive = true;
    this.averageActionActive = false;
    this.basePredictionActionActive = false;
    this.linearRegressionActionActive = false;
    this.boostedRegressorActionActive = false;
    this.randomForestActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onLinearRegressionAction() {
    this.linearRegressionActionActive = true;
    this.averageActionActive = false;
    this.basePredictionActionActive = false;
    this.mlConsensusActionActive = false;
    this.boostedRegressorActionActive = false;
    this.randomForestActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onBoostedRegressorAction() {
    this.boostedRegressorActionActive = true;
    this.averageActionActive = false;
    this.basePredictionActionActive = false;
    this.mlConsensusActionActive = false;
    this.linearRegressionActionActive = false;
    this.randomForestActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onRandomForestAction() {
    this.randomForestActionActive = true;
    this.averageActionActive = false;
    this.basePredictionActionActive = false;
    this.mlConsensusActionActive = false;
    this.linearRegressionActionActive = false;
    this.boostedRegressorActionActive = false;
    this.naiveBayesActionActive = false;
  }

  onNaiveBayesAction() {
    this.naiveBayesActionActive = true;
    this.averageActionActive = false;
    this.basePredictionActionActive = false;
    this.mlConsensusActionActive = false;
    this.linearRegressionActionActive = false;
    this.boostedRegressorActionActive = false;
    this.randomForestActionActive = false;
  }

  // Lineup Data Buttons
  onAwayLineupData(teamId) {
    console.log('Continue to Home Lineup Data');
  }

  onHomeLineupData(teamId) {
    console.log('Continue to Home Lineup Data');
  }

  onMatchOddsLineMovement() {
    console.log('Match Odds & Line Movement');
  }
}
