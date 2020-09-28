import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss'],
})
export class ShowResultsComponent implements OnInit {

  @Input() header: string;
  @Input() timelapse: number;
  @Input() questions: string[];
  @Input() userAnswers: number[];
  @Input() correctAnswers: number[];

  constructor() { }

  ngOnInit() {
    console.log(this.header)
    console.log(this.timelapse)
    console.log(this.questions)
    console.log(this.userAnswers)
    console.log(this.correctAnswers)
  }

}
