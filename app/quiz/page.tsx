"use client";

import { Box } from "@mui/material";
import React from "react";
import { ContextQuizConsumer } from "../context/context-quiz";
import Passage from "./module/passage";
import Question from "./module/question";
import QuizCompleted from "./components/quiz-completed";

export default function Quiz() {
  const { tab, currentQuestion } = React.useContext(ContextQuizConsumer);

  if (!currentQuestion) return <QuizCompleted />;

  return (
    <Box sx={{ paddingTop: "55px" }}>
      {tab === "passage" ? <Passage /> : <Question />}
    </Box>
  );
}
