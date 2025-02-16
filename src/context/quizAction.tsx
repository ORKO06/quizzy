export interface IQuizDataAction{
    type:IQuizDataActionType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>
}

export enum IQuizDataActionType {
    INITIATE_QUIZ = "INITIATE_QUIZ",
    GIVE_CONSENT = "GIVE_CONSENT",
    NEXT_QUESTION = "NEXT_QUESTION",
    ANSWER_SUBMITTED = "ANSWER_SUBMITTED",
    ANSWER_NOT_SUBMITTED = "ANSWER_NOT_SUBMITTED", 
    FINALIZE_QUIZ = "FINALIZE_QUIZ" 
}