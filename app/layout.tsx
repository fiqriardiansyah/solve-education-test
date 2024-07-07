"use client";

import materialTheme, { roboto } from "@/material-theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "../styles/globals.css";
import { ContextQuizProvider } from "./context/context-quiz";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solve Education</title>
        <meta name="description" content="Synergy test" />
        <meta name="theme-color" content={materialTheme.palette.primary.main} />
      </head>
      <body>
        <ProgressBar
          height="4px"
          color="#4E4FEB"
          options={{ showSpinner: false, parent: "body" }}
          shallowRouting
        />
        <AppRouterCacheProvider>
          <ThemeProvider theme={materialTheme}>
            <CssBaseline />
            <ContextQuizProvider>{children}</ContextQuizProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
