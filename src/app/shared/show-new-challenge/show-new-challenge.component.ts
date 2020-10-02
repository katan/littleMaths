import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-new-challenge',
  templateUrl: './show-new-challenge.component.html',
  styleUrls: ['./show-new-challenge.component.scss'],
})
export class ShowNewChallengeComponent {

  @Input() enableNewChallenge: boolean;
  @Input() countdown: number;
  @Output() newChallenge: EventEmitter<void> = new EventEmitter();

  constructor() { }

  newChallengeOutput() {
    this.newChallenge.emit();
  }

}
