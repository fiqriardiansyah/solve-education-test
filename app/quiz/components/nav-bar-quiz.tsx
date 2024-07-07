"use client";

import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  AppBar,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Toolbar,
} from "@mui/material";
import ConfirmationCloseQuiz from "./confirmation-close-quiz";
import ModalInfoQuiz from "./modal-info-quiz";
import React from "react";
import { ContextQuizConsumer } from "@/app/context/context-quiz";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 100,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 100,
    backgroundColor: theme.palette.mode === "light" ? "#4BAF50" : "#308fe8",
  },
}));

export default function NavBarQuiz() {
  const { questionLength, questionProgress } =
    React.useContext(ContextQuizConsumer);

  const MAX_PROGRESS = questionLength || 1;
  const MIN_PROGRESS = 0;

  const normaliseProgres = (value: number = 0) =>
    ((value - MIN_PROGRESS) * 100) / (MAX_PROGRESS - MIN_PROGRESS);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar>
        <ConfirmationCloseQuiz>
          {(openModal) => (
            <IconButton
              onClick={openModal}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </ConfirmationCloseQuiz>
        <BorderLinearProgress
          sx={{ flexGrow: 1 }}
          variant="determinate"
          value={normaliseProgres(questionProgress)}
        />
        <ModalInfoQuiz>
          {(openModal) => (
            <IconButton
              onClick={openModal}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <InfoOutlinedIcon />
            </IconButton>
          )}
        </ModalInfoQuiz>
      </Toolbar>
    </AppBar>
  );
}
