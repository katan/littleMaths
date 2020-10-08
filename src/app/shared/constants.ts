export const appConfig = {
    version: '0.1',
    minDigits: 1, // (1-9)
    maxDigits: 3, // (1-999)
    maxOperations: 2, // (7 + 12 + 5) note: Always must be have a minimum of one operation
    randomChallenges: 10,
    countdownChallenges: 30,
    verticalOperationView: false,
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
