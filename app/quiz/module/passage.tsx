"use client";

import { ContextQuizConsumer } from "@/app/context/context-quiz";
import { PASSAGE_FONT_SIZES } from "@/lib/utils";
import styled from "@emotion/styled";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import {
  Box,
  Card,
  CardContent,
  Container,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const BackgroundBox = styled(Box)(() => ({
  background: blue["100"],
  height: 150,
  width: "100%",
  paddingTop: 20,
}));

const SliderCustom = styled(Slider)(() => ({
  color: blue[400],
  "& .MuiSlider-thumb": {
    backgroundColor: blue[700],
  },
  "& .MuiSlider-rail": {
    color: blue[400],
  },
  "& .MuiSlider-track": {
    color: blue[700],
  },
}));

const CardPassageText = styled(Card)(() => ({
  minHeight: 100,
  borderRadius: 10,
  borderTop: `3px solid ${blue[400]}`,
}));

export default function Passage() {
  const { passageFontSize, setPassageFontSize, currentQuestion } =
    React.useContext(ContextQuizConsumer);

  const onChangeSlider = (_: any, value: number | number[]) => {
    if (setPassageFontSize)
      setPassageFontSize(PASSAGE_FONT_SIZES[value as number]);
  };

  return (
    <BackgroundBox>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={4}
            paddingTop={2}
            px={{ xs: 2, md: 4, lg: 5 }}
          >
            <FontDownloadOutlinedIcon fontSize="small" />
            <SliderCustom
              size="medium"
              aria-label="Temperature"
              defaultValue={0}
              valueLabelDisplay="off"
              marks
              min={0}
              max={2}
              onChange={onChangeSlider}
            />
            <FontDownloadOutlinedIcon fontSize="medium" />
          </Stack>
          <CardPassageText>
            <CardContent>
              <Typography
                sx={{ fontSize: passageFontSize }}
                variant="body1"
                color="text.primary"
                gutterBottom
              >
                {currentQuestion?.question_data.passage}
              </Typography>
            </CardContent>
          </CardPassageText>
        </Stack>
      </Container>
    </BackgroundBox>
  );
}
