import { Injectable } from '@angular/core';

import { Operation } from '@app/shared/constants';

@Injectable()
export class IteratorService {
  countdown = 0;
  iterations = 0;
  currentIteration = 0;
  questions: string[] = [];
  correctAnswers: number[] = [];
  userAnswers: number[] = [];

  constructor() { }

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
    this.countdown = 0;
    this.iterations = 0;
    this.currentIteration = 0;
    this.questions = [];
    this.correctAnswers = [];
    this.userAnswers = [];
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
