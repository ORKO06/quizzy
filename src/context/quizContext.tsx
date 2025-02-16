"use client";
import { createContext, Dispatch, } from "react";

// intitial state

// actions
import { IQuizDataAction } from "./quizAction";

// interface
import { IQuizData } from "./quizInterface";
import { initialState } from "./initialState";

export interface IQuizContext {
    state: IQuizData;
    dispatch: Dispatch<IQuizDataAction>
}


export const initialValue: IQuizContext = {
    state: initialState,
    dispatch: () => void 0
  };

export default createContext(initialValue);