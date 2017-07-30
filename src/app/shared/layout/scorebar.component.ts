import {Component, OnInit} from '@angular/core';
import { ScorebarService } from '../services';

@Component({
  selector: 'layout-scorebar',
  templateUrl: './scorebar.component.html',
  styleUrls: ['./scorebar.component.css']
})
export class ScorebarComponent implements OnInit{

  constructor(
    private scorebarService: ScorebarService,
  ) { }
  scorebar: any[];
  currentSport: 'MLB';
  ngOnInit() {
    this.scorebarService.getAll()
    .subscribe(scorebar => {
        this.scorebar = scorebar;
        console.log(this.scorebar);
      }
    );
  }

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};


}
