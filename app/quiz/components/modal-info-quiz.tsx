"use client"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import React from "react";

export type ModalInfoQuizType = {
    children: (openModal: any) => React.ReactElement
}

export default function ModalInfoQuiz({ children }: ModalInfoQuizType) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                <DialogTitle id="alert-dialog-title">
                    Introducing my self
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        HI!, My Name Is Fiqri Ardiansyah
                    </DialogContentText>
                </DialogContent>
                <DialogActions color="black">
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}