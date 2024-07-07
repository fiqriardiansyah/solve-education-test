"use client"

import edInCorrectJson from "@/public/ed_incorrect.json";
import styled from "@emotion/styled";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: edInCorrectJson,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const CenteredBox = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: '100px'
}))

export type InCorrectFeedbackType = {
    onNextQuestion: () => void;
}

export default function InCorrectFeedback({ onNextQuestion }: InCorrectFeedbackType) {
    return (
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.3, delay: 0.4 }} style={{ zIndex: 10, width: '100%' }}>
            <CenteredBox>
                <Card elevation={5} sx={{ width: '100%', borderRadius: 3 }}>
                    <CardContent>
                        <Stack spacing={2} alignItems="center">
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Lottie options={defaultOptions}
                                    height={100}
                                    width={100} />
                                <Typography sx={(theme) => ({ color: theme.palette.error.main })} variant="h5">
                                    Try Again!
                                </Typography>
                            </Stack>
                            <Button onClick={onNextQuestion} color="error" variant="contained" sx={{ borderRadius: 2, textTransform: 'capitalize', color: 'white' }}>
                                Continue
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </CenteredBox>
        </motion.div>
    )
}