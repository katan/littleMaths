import { Component, ViewChild } from '@angular/core';
import { IteratorService } from '@app/services/iterator.service';
import { SettingsService } from '@app/services/settings.service';
import { Operation } from '@app/shared/constants';
import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-random-challenge',
  templateUrl: './random-challenge.page.html',
  styleUrls: ['./random-challenge.page.scss'],
  providers: [IteratorService]
})
export class RandomChallengePage implements ViewDidEnter, ViewDidLeave {
  userValue: number;
  userAnswer: number;
  question: string;

  @ViewChild('keyboard') keyboard: VirtualKeyboardComponent;

  get totalIterations() {
    return this.iteratorService.iterations;
  }

  get currentIteration() {
    return this.iteratorService.currentIteration + 1;
  }

  constructor(
    private iteratorService: IteratorService,
    private settingsService: SettingsService
  ) { }

  ionViewDidEnter() {
    this.initialize();
  }

  ionViewDidLeave() {
    this.iteratorService.clear();
  }

  insertValue(value: number) {
    this.userValue = value > 0 && value || null;
  }

  insertResult(value: number) {
    this.userAnswer = value;
    this.iteratorService.addAnswer(value);

    if (this.currentIteration <= this.totalIterations) {
      this.nextQuestion();
    } else {
      console.log(this.iteratorService.userAnswers);
      console.log(this.iteratorService.correctAnswers);
    }
  }

  nextQuestion() {
    this.userValue = null;
    this.keyboard.clear();
    this.generateQuestion();
  }

  newChallenge() {
    this.userValue = null;
    this.iteratorService.clear();
    this.initialize();
  }

  private initialize() {
    this.iteratorService.iterations = this.settingsService.get('randomChallenges');
    this.generateQuestion();
  }

  private generateQuestion() {
    this.iteratorService.generateQuestions(Operation.multiplication);
    this.question = this.iteratorService.questions[this.iteratorService.currentIteration];
  }
}
