"use client";

import { Stack, Typography } from "@mui/material";

export default function QuizCompleted() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Typography
        variant="h3"
        sx={(theme) => ({ color: theme.palette.success.main })}
        textAlign="center"
      >
        Question Completed!
      </Typography>
    </Stack>
  );
}
