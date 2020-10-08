import { Component, ViewChild } from '@angular/core';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';

import { ChallengeService } from '@app/services/challenge.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Challenge } from '@app/shared/challenge.class';

import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { Operation } from '@app/shared/constants';

@Component({
  selector: 'app-random-challenge',
  templateUrl: './random-challenge.page.html',
  styleUrls: ['./random-challenge.page.scss'],
  providers: [ChallengeService]
})
export class RandomChallengePage extends Challenge implements ViewDidEnter, ViewDidLeave {
  operation = Operation.summation;

  @ViewChild('keyboard') keyboard: VirtualKeyboardComponent;

  constructor(
    protected challenggeService: ChallengeService,
    private localStorage: LocalStorageService
  ) {
    super(Operation.summation, 'random', challenggeService);
  }

  ionViewDidEnter() {
    this.initialize();
  }

  ionViewDidLeave() {
    this.challenggeService.clear();
  }

  nextQuestion() {
    super.nextQuestion();
    this.keyboard.clear();
  }

  newChallenge() {
    super.newChallenge();
    this.initialize();
  }

  private initialize() {
    this.challenggeService.iterations = this.localStorage.get('randomChallenges');
    this.challenggeService.startTime();
    super.generateQuestion();
  }
}
