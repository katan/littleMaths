import { Injectable } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { Operation } from '@app/shared/constants';
import { Stat } from '@app/models/stats.model';

@Injectable()
export class ChallengeService {
  countdown: number;
  originalCountdown: number;
  countdown$: Subject<void>;
  iterations = 0;
  currentIteration = 0;
  questions: string[] = [];
  correctAnswers: number[] = [];
  userAnswers: number[] = [];
  time: Date;
  // From localstorage
  minDigits: number;
  maxDigits: number;
  maxOperations: number;

  private timer: Subscription;

  constructor(private localStorage: LocalStorageService) {
    this.minDigits = this.localStorage.get('minDigits');
    this.maxDigits = this.localStorage.get('maxDigits');
    this.maxOperations = this.localStorage.get('maxOperations');

    console.log(this.minDigits, this.maxDigits, this.maxOperations);
  }

  startTime() {
    this.time = new Date();
  }

  startCountdown(countdown: number) {
    this.countdown = countdown;
    this.originalCountdown = countdown;
    this.countdown$ = new Subject();

    this.timer = interval(1000).subscribe(
      () => {
        countdown--;
        this.countdown = countdown;

        if (countdown <= 0) {
          this.countdown$.next();
        }
      });
  }

  stopCountdown() {
    this.timer.unsubscribe();
  }

  addAnswer(answer: number) {
    this.userAnswers.push(answer);
    this.currentIteration++;
  }

  generateQuestions(operation: Operation) {
    let values: Array<number | string>;

    switch (operation) {
      case Operation.summation:
        values = this.generateSummation();
        break;
      case Operation.subtraction:
        break;
      case Operation.multiplication:
        values = this.generateMultiplication();
        break;
    }
    this.saveQuestionAndAnswer(values[0] as string, values[1] as number);
  }

  clear() {
    this.iterations = 0;
    this.currentIteration = 0;
    this.questions = [];
    this.correctAnswers = [];
    this.userAnswers = [];
    this.time = null;
  }

  getTimeElapsed(): number {
    const endTime = new Date();
    const timeDiff = (endTime.getTime() - this.time.getTime()) / 1000;
    return Math.round(timeDiff);
  }

  saveStats(operation: Operation, stat: Stat): void {
    this.localStorage.push('stats', operation, stat);
  }

  private generateSummation(): Array<number | string> {
    let operationString = '';
    let operationResult = 0;

    for (let i = 0; i < this.maxOperations; i++) {
      const operation = this.getRandomInt(
        parseInt('1'.repeat(this.minDigits), 10),
        parseInt('9'.repeat(this.maxDigits), 10)
      );

      operationResult += operation;
      operationString += (i < (this.maxOperations - 1)) ? `${operation} + ` : operation;

    }

    return [operationString, operationResult];
  }

  private generateMultiplication(base?: number[]): Array<number | string> {
    const value1 = base && this.getRandomInt(base[0], base[1]) || this.getRandomInt(1, 10);
    const value2 = this.getRandomInt(1, 10);
    return [`${value1} ${Operation.multiplication} ${value2}`, value1 * value2];
  }

  private saveQuestionAndAnswer(question: string, answer: number) {
    this.questions.push(question);
    this.correctAnswers.push(answer);
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
