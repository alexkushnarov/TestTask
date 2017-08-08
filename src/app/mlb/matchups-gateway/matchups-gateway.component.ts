import { Component, OnInit } from '@angular/core';
import { MatchupsGatewayService } from './matchups-gateway.service';

@Component({
  selector: 'app-matchups',
  templateUrl: './matchups-gateway.component.html',
  styleUrls: ['./matchups-gateway.component.css']
})
export class MatchupsComponent implements OnInit {
  public matchups;

  constructor(
    private matchupsGatewayService: MatchupsGatewayService
  ) { }

  ngOnInit() {
    this.matchupsGatewayService.getTodayMatchups()
      .subscribe(matchups => {
        this.matchups = matchups.map(matchup => {
          matchup.showed = true;
          return matchup;
        });
      });
  }

  onToggleItem(event, matchup): void {
    event.stopPropagation();
    matchup.showed = !matchup.showed;
  }

  getShowedValue(): number {
    return this.matchups.filter(matchup => matchup.showed).length;
  }

}
