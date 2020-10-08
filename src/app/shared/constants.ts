export const appConfig = {
    version: '0.1',
    minDigits: 1, // (1-9)
    maxDigits: 3, // (1-999)
    minOperations: 1, // (7 + 12)
    maxOperations: 2, // (7 + 12 + 5)
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
