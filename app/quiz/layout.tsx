"use client";

import React from "react";
import BottomNavBarQuiz from "./components/bottom-nav-bar-quiz";
import NavBarQuiz from "./components/nav-bar-quiz";


export default function Layout({ children }: { children: React.ReactElement }) {

    return (
        <>
            <NavBarQuiz />
            {children}
            <BottomNavBarQuiz />
        </>
    )
}