import { ChallengeType, Operation } from '@app/shared/constants';

export class Stat {
    totalQuestions: number;
    correctAnswers: number;
    challengeType: ChallengeType;
    timeElapsed: number;
    countdown?: number;
}
