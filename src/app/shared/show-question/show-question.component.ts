import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss'],
})
export class ShowQuestionComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;

  constructor() { }

  ngOnInit() {}

}
