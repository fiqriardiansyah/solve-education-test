"use client";

import { ContextQuizConsumer } from "@/app/context/context-quiz";
import { ROUTE } from "@/lib/utils";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next-nprogress-bar";
import React from "react";

export type ConfirmationCloseQuizType = {
  children: (openModal: any) => React.ReactElement;
};

export default function ConfirmationCloseQuiz({
  children,
}: ConfirmationCloseQuizType) {
  const router = useRouter();
  const { reset } = React.useContext(ContextQuizConsumer);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEndQuiz = () => {
    if (reset) reset();
    router.push(ROUTE.home);
  };

  return (
    <>
      {children(handleClickOpen)}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography variant="h6">Do you want to exit?</Typography>
        </DialogContent>
        <DialogActions>
          <Box sx={{ width: "90%", marginX: "auto" }}>
            <Stack spacing={2}>
              <Button
                variant="contained"
                size="large"
                onClick={handleClose}
                color="success"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontWeight: "light",
                }}
              >
                Stay
              </Button>
              <Button
                variant="text"
                size="large"
                onClick={handleEndQuiz}
                autoFocus
                color="error"
                sx={{ textTransform: "capitalize", fontWeight: "light" }}
              >
                Exit
              </Button>
            </Stack>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}
