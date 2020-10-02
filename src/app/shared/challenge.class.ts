import { ChallengeService } from '@app/services/challenge.service';
import { Operation } from './constants';

export class Challenge {
    countdownStart = false;
    question: string;
    userAnswer: number;
    userValue: number;
    timeElapsed: number;

    get totalIterations(): number {
        return this.challengeService.iterations;
    }

    get currentIteration(): number {
        return this.challengeService.currentIteration + 1;
    }

    get countdown(): number {
        return this.challengeService.countdown;
    }

    constructor(
        protected operation: Operation,
        protected challengeService: ChallengeService
    ) { }

    protected insertValue(value: number) {
        this.userValue = value > 0 && value || null;
    }

    protected insertResult(value: number) {
        this.userAnswer = value;
        this.challengeService.addAnswer(value);

        if (this.currentIteration <= this.totalIterations || this.countdownStart) {
            this.nextQuestion();
        } else {
            this.timeElapsed = this.challengeService.getTimeElapsed();
        }
    }

    protected nextQuestion() {
        this.userValue = null;
        this.generateQuestion();
    }

    protected generateQuestion() {
        this.challengeService.generateQuestions(this.operation);
        this.question = this.challengeService.questions[this.challengeService.currentIteration];
    }
}
