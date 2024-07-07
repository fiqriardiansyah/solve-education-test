import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import { blue } from "@mui/material/colors";
import { AnimatePresence, motion } from "framer-motion";

type ButtonAnswerType = ButtonProps & {
  pickOption?: string;
  rightOption?: string;
  option?: string;
};

const ButtonAnswer = styled(Button)(() => ({
  fontWeight: 600,
  padding: 15,
  borderRadius: 10,
  display: "flex",
  justifyContent: "start",
  width: "100%",
}));

const ButtonAnswerAnimated = ({
  option,
  rightOption,
  pickOption,
  ...props
}: ButtonAnswerType) => {
  const color = (() => {
    if (!pickOption) return "info";
    if (pickOption === rightOption) return "success";
    return "error";
  })();

  return (
    <AnimatePresence mode="sync">
      {pickOption && pickOption !== option ? null : (
        <motion.div
          exit={{ y: "100px", opacity: 0, zIndex: 0, height: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ButtonAnswer
            variant={pickOption ? "contained" : "outlined"}
            color={color}
            sx={{
              textTransform: "capitalize",
              color: pickOption ? "white" : blue[300],
            }}
            {...props}
          >
            {option}
          </ButtonAnswer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ButtonAnswerAnimated;
