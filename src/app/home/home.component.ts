import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  staticTeamName = 'boston-red-sox';



  constructor(
    private router: Router,
  ) {}
  // Navigate to Team and pass team name for API request
  onNavigateToTeamLineup(teamName) {
    this.router.navigate(['/mlb/lineups/2017/', teamName]);
  }
}
