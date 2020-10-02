import { ChallengeService } from '@app/services/challenge.service';
import { interval, Subscription } from 'rxjs';
import { Operation } from './constants';

export class Challenge {
    enableNewChallenge = false;
    countdownStart = false;
    question: string;
    userAnswer: number;
    userValue: number;
    timeElapsed: number;
    waitToEnableNewChallenge = 5; // in seconds

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

    protected insertValue(value: number): void {
        this.userValue = value > 0 && value || null;
    }

    protected insertResult(value: number): void {
        this.userAnswer = value;
        this.challengeService.addAnswer(value);

        if (this.currentIteration <= this.totalIterations || this.countdownStart) {
            this.nextQuestion();
        } else {
            this.timeElapsed = this.challengeService.getTimeElapsed();
            this.waitToStartNewChallenge();
        }
    }

    protected nextQuestion(): void {
        this.userValue = null;
        this.generateQuestion();
    }

    protected newChallenge(): void {
        this.userValue = null;
        this.enableNewChallenge = false;
        this.waitToEnableNewChallenge = 5;
        this.challengeService.clear();
    }

    protected generateQuestion(): void {
        this.challengeService.generateQuestions(this.operation);
        this.question = this.challengeService.questions[this.challengeService.currentIteration];
    }

    protected waitToStartNewChallenge(): void {
        const interval$: Subscription = interval(1000).subscribe(
            () => {
                this.waitToEnableNewChallenge --;

                if (this.waitToEnableNewChallenge <= 0) {
                    this.enableNewChallenge = true;
                    interval$.unsubscribe();
                }
            }
        );
    }
}
