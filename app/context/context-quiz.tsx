"use client"

import { PASSAGE_FONT_SIZES } from "@/lib/utils";
import React from "react";
import questionData from '@/public/question_data.json';

export type ContextQuizType = {
    tab: "passage" | "question";
    pickOption: string;
    passageFontSize: number;
    questionProgress: number;
    questionLength: number;
    currentQuestion: typeof questionData[number];
    setTab: (val: ContextQuizType['tab']) => void;
    setPassageFontSize: (val: number) => void;
    nextQuestion: (callback: () => void) => void;
    reset: () => void;
    setPickOption: (val: string) => void;
}

export type ContextQuizState = Omit<ContextQuizType, "setTab" | "setPassageFontSize" | "nextQuestion" | "reset" | "setPickOption">

export const ContextQuizConsumer = React.createContext<Partial<ContextQuizType>>({});

const defaultState: Partial<ContextQuizState> = {
    tab: "passage",
    passageFontSize: PASSAGE_FONT_SIZES[0],
    questionProgress: 0,
    questionLength: questionData.length,
    pickOption: ""
}

export const ContextQuizProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] | React.ReactNode }) => {
    const [stateQuiz, setStateQuiz] = React.useState<Partial<ContextQuizState>>(defaultState)

    const reset = () => {
        setStateQuiz(defaultState)
    }

    const setPickOption = (val: string) => {
        setStateQuiz((prev) => ({
            ...prev,
            pickOption: val,
        }))
    }

    const setTab = (val: ContextQuizType["tab"]) => {
        setStateQuiz((prev) => ({
            ...prev,
            tab: val
        }))
    }

    const setPassageFontSize = (val: number) => {
        setStateQuiz((prev) => ({
            ...prev,
            passageFontSize: val
        }))
    }

    const nextQuestion = (callback: () => void) => {
        setStateQuiz((prev) => {
            const questionProgress = prev.questionProgress! + 1
            if (questionProgress === prev.questionLength) {
                callback();
            }
            return {
                ...prev,
                questionProgress,
                tab: "passage",
                pickOption: ""
            }
        });
    }

    const value: Partial<ContextQuizType> = {
        ...stateQuiz,
        setPassageFontSize,
        setTab,
        currentQuestion: questionData[stateQuiz.questionProgress!],
        nextQuestion,
        reset,
        setPickOption
    }

    return (
        <ContextQuizConsumer.Provider value={value}>
            {children}
        </ContextQuizConsumer.Provider>
    )
}