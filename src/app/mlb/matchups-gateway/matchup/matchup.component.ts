import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  setColorRatingClass(rating: number) {
    if (rating > 4) {
      return 'rating rating-high';
    } else if (rating > 1) {
      return 'rating rating-average';
    } else {
      return 'rating rating-low';
    }
  }

  onLineClick() {
    alert('line clicked');
  }

}
