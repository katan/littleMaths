import { IteratorService } from '@app/services/iterator.service';
import { Operation } from './constants';

export class Challenge {
    countdownStart = false;
    question: string;
    userAnswer: number;
    userValue: number;
    timeElapsed: number;

    get totalIterations(): number {
        return this.iteratorService.iterations;
    }

    get currentIteration(): number {
        return this.iteratorService.currentIteration + 1;
    }

    get countdown(): number {
        return this.iteratorService.countdown;
    }

    constructor(
        protected operation: Operation,
        protected iteratorService: IteratorService
    ) { }

    protected insertValue(value: number) {
        this.userValue = value > 0 && value || null;
    }

    protected insertResult(value: number) {
        this.userAnswer = value;
        this.iteratorService.addAnswer(value);

        if (this.currentIteration <= this.totalIterations || this.countdownStart) {
            this.nextQuestion();
        } else {
            this.timeElapsed = this.iteratorService.getTimeElapsed();
        }
    }

    protected nextQuestion() {
        this.userValue = null;
        this.generateQuestion();
    }

    protected generateQuestion() {
        this.iteratorService.generateQuestions(this.operation);
        this.question = this.iteratorService.questions[this.iteratorService.currentIteration];
    }
}
