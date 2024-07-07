"use client"

import { ContextQuizConsumer } from "@/app/context/context-quiz";
import { ROUTE } from "@/lib/utils";
import styled from "@emotion/styled";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import ButtonAnswerAnimated from "../components/button-answer";
import CorrectFeedback from "../components/correct-feedback";
import InCorrectFeedback from "../components/incorrect-feedback";

const BackgroundBox = styled(Box)(() => ({
    background: blue["100"],
    minHeight: 150,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 30
}));

const CardQuestionText = styled(Card)(() => ({
    minHeight: 100,
    borderRadius: 10,
    borderLeft: `3px solid ${blue[400]}`,
    display: 'flex',
    alignItems: 'center',
    padding: 10
}));

const CenteredBox = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

export default function Question() {
    const router = useRouter();

    const { currentQuestion, nextQuestion, setPickOption, pickOption } = React.useContext(ContextQuizConsumer);

    const onClickAnswer = (option: string) => {
        if (setPickOption) setPickOption(option);
    }

    const onNextQuestion = () => {
        if (nextQuestion) {
            nextQuestion(() => {
                setTimeout(() => {
                    router.push(ROUTE.thankyou)
                }, 300);
            });
        }
    }

    return (
        <Stack spacing={3}>
            <BackgroundBox>
                <Container maxWidth="lg">
                    <CardQuestionText elevation={0}>
                        <Typography variant="body1" fontWeight={600}>
                            {currentQuestion?.question_data.question}
                        </Typography>
                    </CardQuestionText>
                </Container>
            </BackgroundBox>
            <CenteredBox>
                <Container maxWidth="md">
                    <Stack spacing={7} alignItems="center" sx={{ width: '100%' }}>
                        <Stack spacing={1} sx={{ width: '100%' }}>
                            {currentQuestion?.question_data.options.map((option) => (
                                <ButtonAnswerAnimated
                                    rightOption={currentQuestion.question_data.answer}
                                    pickOption={pickOption}
                                    option={option}
                                    onClick={() => onClickAnswer(option)}
                                    key={option} />
                            ))}
                        </Stack>
                        {(pickOption && pickOption === currentQuestion?.question_data.answer) && <CorrectFeedback onNextQuestion={onNextQuestion} />}
                        {(pickOption && pickOption !== currentQuestion?.question_data.answer) && <InCorrectFeedback onNextQuestion={onNextQuestion} />}
                    </Stack>
                </Container>
            </CenteredBox>
        </Stack>
    );
}