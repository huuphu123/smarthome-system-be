export interface Response<T> {
    data?: T;
    message: string;
    code: number
}

export enum HTTP_MESSAGE {
    OK = 'OK',
    NOT_FOUND = 'NOT FOUND',
    INTERNAL_SERVER_ERROR = 'INTERNAL SERVER ERROR',
    LOGIN_FAILED = 'LOGIN FAILED'
}
