"use client";

import { ROUTE } from "@/lib/utils";
import styled from "@emotion/styled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Center = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const ContainerCustom = styled(Container)(() => ({
  paddingTop: "80px",
  paddingBottom: "80px",
  backgroundImage: 'url("/bg_landing_page.webp")',
  backgroundSize: "cover",
}));

const GetStartedButton = styled(Button)(({ theme }: any) => ({
  background: theme.palette.success.main,
  color: "white",
  borderRadius: 100,
  padding: "10px 20px",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

export default function Page() {
  return (
    <ContainerCustom maxWidth="xl">
      <Stack spacing={3}>
        <Center>
          <Image src="/welcome.webp" width={250} height={250} alt="welcome" />
        </Center>
        <Center>
          <Typography variant="h5" fontWeight={500}>
            Ed the Learning Bot
          </Typography>
        </Center>
        <Center>
          <Typography
            variant="h3"
            fontWeight={600}
            color="#5D7191"
            textAlign="center"
          >
            Learn with Ed and win prizes!
          </Typography>
        </Center>
        <Center>
          <Link href={ROUTE.quiz}>
            <GetStartedButton size="large">Get Started</GetStartedButton>
          </Link>
        </Center>
      </Stack>
    </ContainerCustom>
  );
}
