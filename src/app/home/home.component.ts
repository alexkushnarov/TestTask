import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, UserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

=======
  staticTeamName = 'boston-red-sox';
>>>>>>> team-lineups
  isAuthenticated: boolean;
  listConfig: ArticleListConfig = new ArticleListConfig();
  tags: Array<string> = [];
  tagsLoaded = false;

<<<<<<< HEAD
=======
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

>>>>>>> team-lineups
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
<<<<<<< HEAD

=======
>>>>>>> team-lineups
        // set the article list accordingly
        if (authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      }
    );
  }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }
<<<<<<< HEAD
=======

  // Navigate to Team and pass team name for API request
  onNavigateToTeamLineup(teamName) {
    this.router.navigate(['/mlb/lineups/2017/', teamName]);
  }
>>>>>>> team-lineups
}
