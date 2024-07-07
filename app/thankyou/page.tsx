"use client";

import { ROUTE } from "@/lib/utils";
import edCorrectJson from "@/public/ed_correct.json";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import Lottie from "react-lottie";
import { ContextQuizConsumer } from "../context/context-quiz";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: edCorrectJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Thankyou() {
  const router = useRouter();
  const { reset } = React.useContext(ContextQuizConsumer);

  const backToHomeHandler = () => {
    if (reset) reset();
    router.replace(ROUTE.home);
  };

  return (
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Lottie options={defaultOptions} height={200} width={200} />
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.success.main,
            fontWeight: 500,
          })}
        >
          Thank you
        </Typography>
        <Button
          onClick={backToHomeHandler}
          variant="contained"
          color="success"
          sx={{ color: "white", textTransform: "capitalize" }}
        >
          Back to home
        </Button>
      </Stack>
    </Container>
  );
}
