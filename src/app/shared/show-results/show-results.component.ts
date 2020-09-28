import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss'],
})
export class ShowResultsComponent implements OnInit {
  correctAnswersCount = 0;

  @Input() header?: string;
  @Input() timeElapsed: number;
  @Input() questions: string[];
  @Input() userAnswers: number[];
  @Input() correctAnswers: number[];

  constructor() { }

  ngOnInit() {
    this.userAnswers.forEach((answer: number, index: number) => {
      if (answer === this.correctAnswers[index]) {
        this.correctAnswersCount++;
      }
    });
  }
}
