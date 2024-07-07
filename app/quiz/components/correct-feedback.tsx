"use client"

import edCorrectJson from "@/public/ed_correct.json";
import styled from "@emotion/styled";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: edCorrectJson,
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

export type CorrectFeedbackType = {
    onNextQuestion: () => void;
}

export default function CorrectFeedback({ onNextQuestion }: CorrectFeedbackType) {
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
                                <Typography sx={(theme) => ({ color: theme.palette.success.main })} variant="h5">
                                    Amazing!
                                </Typography>
                            </Stack>
                            <Button onClick={onNextQuestion} color="success" variant="contained" sx={{ borderRadius: 2, textTransform: 'capitalize', color: 'white' }}>
                                Continue
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </CenteredBox>
        </motion.div>
    )
}