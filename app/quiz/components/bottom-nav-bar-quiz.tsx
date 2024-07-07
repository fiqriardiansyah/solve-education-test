import {
  ContextQuizConsumer,
  ContextQuizType,
} from "@/app/context/context-quiz";
import DescriptionIcon from "@mui/icons-material/Description";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Paper, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/styles";
import * as React from "react";

const itemsNav = [
  { icon: DescriptionIcon, label: "Passage", value: "passage" },
  { icon: QuestionAnswerIcon, label: "Question", value: "question" },
];

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    top: "0 !important",
    bottom: "auto !important",
    height: "4px",
  },
}));

const StyledTab = styled(Tab)(() => ({
  color: "white",
}));

export default function BottomNavBarQuiz() {
  const { setTab, tab } = React.useContext(ContextQuizConsumer);

  const handleChange = (_: any, newValue: ContextQuizType["tab"]) => {
    if (setTab) setTab(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 20 }}
      elevation={3}
    >
      <StyledTabs
        value={tab}
        variant="fullWidth"
        onChange={handleChange}
        centered
        sx={{ background: "#1E2D37", width: "100%" }}
      >
        {itemsNav.map((Nav) => (
          <StyledTab
            sx={{ flexGrow: 1 }}
            key={Nav.value}
            icon={<Nav.icon />}
            value={Nav.value}
            iconPosition="start"
            label={Nav.label}
          />
        ))}
      </StyledTabs>
    </Paper>
  );
}
