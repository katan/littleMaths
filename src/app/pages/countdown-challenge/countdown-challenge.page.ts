import { Component, ViewChild } from '@angular/core';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';

import { ChallengeService } from '@app/services/challenge.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { Challenge } from '@app/shared/challenge.class';

import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { Operation } from '@app/shared/constants';

@Component({
  selector: 'app-countdown-challenge',
  templateUrl: './countdown-challenge.page.html',
  styleUrls: ['./countdown-challenge.page.scss'],
  providers: [ChallengeService]
})
export class CountdownChallengePage extends Challenge implements ViewDidEnter, ViewDidLeave {

  @ViewChild('keyboard') keyboard: VirtualKeyboardComponent;

  constructor(
    challengeService: ChallengeService,
    private localStorage: LocalStorageService
  ) {
    super(Operation.multiplication, challengeService);
  }

  ionViewDidEnter() {
    this.initialize();
  }

  ionViewDidLeave() {
    this.challengeService.clear();
    this.challengeService.stopCountdown();
  }

  nextQuestion() {
    super.nextQuestion();
    this.keyboard.clear();
  }

  newChallenge() {
    this.userValue = null;
    this.challengeService.clear();
    this.initialize();
  }

  private initialize() {
    this.countdownStart = true;
    this.challengeService.startTime();
    super.generateQuestion();
    this.startCountDown();
  }

  private startCountDown() {
    this.challengeService.startCountdown(this.localStorage.get('countdownChallenges'));
    this.challengeService.countdown$.subscribe(
      () => {
        this.countdownStart = false;
        this.timeElapsed = this.challengeService.getTimeElapsed();
        this.challengeService.stopCountdown();
      }
    );
  }
}
