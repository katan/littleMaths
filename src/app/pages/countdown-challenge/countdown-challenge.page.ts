import { Component, ViewChild } from '@angular/core';
import { IteratorService } from '@app/services/iterator.service';
import { SettingsService } from '@app/services/settings.service';
import { Challenge } from '@app/shared/challenge.class';
import { Operation } from '@app/shared/constants';
import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-countdown-challenge',
  templateUrl: './countdown-challenge.page.html',
  styleUrls: ['./countdown-challenge.page.scss'],
  providers: [IteratorService]
})
export class CountdownChallengePage extends Challenge implements ViewDidEnter, ViewDidLeave {

  @ViewChild('keyboard') keyboard: VirtualKeyboardComponent;

  constructor(
    iteratorService: IteratorService,
    private settingsService: SettingsService
  ) {
    super(Operation.multiplication, iteratorService);
  }

  ionViewDidEnter() {
    this.initialize();
  }

  ionViewDidLeave() {
    this.iteratorService.clear();
  }

  nextQuestion() {
    super.nextQuestion();
    this.keyboard.clear();
  }

  newChallenge() {
    this.userValue = null;
    this.iteratorService.clear();
    this.initialize();
  }

  private initialize() {
    this.countdownStart = true;
    this.iteratorService.startTime();
    super.generateQuestion();
    this.startCountDown();
  }

  private startCountDown() {
    this.iteratorService.startCountdown(this.settingsService.get('countdownChallenges'));
    this.iteratorService.countdown$.subscribe(
      () => {
        this.countdownStart = false;
        this.timeElapsed = this.iteratorService.getTimeElapsed();
        this.iteratorService.stopCountdown();
      }
    );
  }
}
