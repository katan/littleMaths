import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage.service';
import { stringify } from 'querystring';
import { Operation } from '../constants';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss'],
})
export class ShowQuestionComponent implements OnInit {
  showVerticalView: boolean;

  @Input() question: string;
  @Input() answer: string;
  @Input() operation: Operation;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.showVerticalView = this.localStorage.get('verticalOperationView');
  }

  generateVerticalView(): string {
    const values = this.getValues();
    let render = '';

    for (const value of values) {
      render += `<div class="value">${value}</div>`;
    }

    return render += `<div class="operator">${this.operation}</div>`;
  }

  getValues(): string[] {
    const regExp = new RegExp(`[${Operation.summation},${Operation.subtraction},${Operation.multiplication},${Operation.division}]`);
    return this.question.replace(/\s/g, '').split(regExp);
  }
}
