import { Injectable } from '@angular/core';

import { Operation } from '@app/shared/constants';
import { interval, Subject, Subscription } from 'rxjs';

@Injectable()
export class ChallengeService {
  countdown: number;
  countdown$: Subject<void> = new Subject();
  iterations = 0;
  currentIteration = 0;
  questions: string[] = [];
  correctAnswers: number[] = [];
  userAnswers: number[] = [];
  time: Date;

  private timer: Subscription;

  constructor() { }

  startTime() {
    this.time = new Date();
  }

  startCountdown(countdown: number) {
    this.countdown = countdown;
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

  generateQuestions(operation: Operation, base?: number) {
    switch (operation) {
      case Operation.summation:
        break;
      case Operation.subtraction:
        break;
      case Operation.multiplication:
        const values: Array<number | string> = this.generateMultiplication(base);
        this.saveQuestionAndAnswer(values[0] as string, values[1] as number);
        break;
    }
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

  private generateMultiplication(base: number): Array<number | string> {
    const value1 = base && base || this.getRandomInt(1, 10);
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
