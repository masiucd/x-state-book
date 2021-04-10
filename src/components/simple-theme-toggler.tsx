import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const Wrapper = styled.section``;

type ThemeMachineEvents = { type: "TURN_ON" } | { type: "TURN_OFF" } | { type: "SWITCH" };

const themeMachine = createMachine<unknown, ThemeMachineEvents>({
  id: "theme",
  initial: "hidden",
  states: {
    hidden: {
      on: {
        TURN_ON: {
          target: "visible.hist",
        },
      },
    },
    visible: {
      initial: "light",
      states: {
        light: {
          on: {
            SWITCH: {
              target: "dark",
            },
          },
        },
        dark: {
          on: {
            SWITCH: {
              target: "light",
            },
          },
        },
        hist: {
          type: "history",
        },
      },
      on: {
        TURN_OFF: {
          target: "hidden",
        },
      },
    },
  },
});

interface BoxProps {
  isAnimating: boolean;
  switchThemeHandler: () => void;
}
const Box = ({ isAnimating, switchThemeHandler }: BoxProps) => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button onClick={switchThemeHandler}>Switch theme </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SimpleThemeToggler = (): JSX.Element => {
  const [current, send] = useMachine(themeMachine);
  const isVisible = current.matches("visible");
  const isDarkTheme = current.matches("visible.dark");
  console.log({ isDarkTheme });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }, [isDarkTheme]);

  const switchThemeHandler = (): void => {
    send("SWITCH");
  };

  return (
    <Wrapper>
      <h1>Theme toggler</h1>
      <Box isAnimating={isVisible} switchThemeHandler={switchThemeHandler} />
      <button type="button" onClick={() => send("TURN_ON")}>
        open
      </button>
      <button type="button" onClick={() => send("TURN_OFF")}>
        Close
      </button>
    </Wrapper>
  );
};

export default SimpleThemeToggler;
