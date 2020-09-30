import { Component, ViewChild } from '@angular/core';
import { IteratorService } from '@app/services/iterator.service';
import { SettingsService } from '@app/services/settings.service';
import { Challenge } from '@app/shared/challenge.class';
import { Operation } from '@app/shared/constants';
import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { ViewDidEnter, ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-random-challenge',
  templateUrl: './random-challenge.page.html',
  styleUrls: ['./random-challenge.page.scss'],
  providers: [IteratorService]
})
export class RandomChallengePage extends Challenge implements ViewDidEnter, ViewDidLeave {

  @ViewChild('keyboard') keyboard: VirtualKeyboardComponent;

  constructor(
    protected iteratorService: IteratorService,
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
    this.iteratorService.iterations = this.settingsService.get('randomChallenges');
    this.iteratorService.startTime();
    super.generateQuestion();
  }
}
