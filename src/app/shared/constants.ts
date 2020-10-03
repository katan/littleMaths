export const appConfig = {
    version: '0.1',
    randomChallenges: 10,
    countdownChallenges: 30,
    currentLanguage: 'es-US',
    cultureCodes: [
        'en-US',
        'es-ES',
        'ca-ES'
    ],
    languages: [
        'English',
        'Español',
        'Català'
    ]
};

export type ChallengeType = 'custom' | 'countdown' | 'random';

export enum Operation {
    summation = '+',
    subtraction = '-',
    multiplication = '×',
    division = '÷',
    equal = '=',
    CE = 'CE'
}
