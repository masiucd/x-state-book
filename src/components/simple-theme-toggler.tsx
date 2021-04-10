import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import useTheme from "@hooks/theme";
import { Wrapper } from "@components/styles/wrappers";

const Content = styled.div`
  min-width: 20em;
  padding: 1em;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  .btns {
    display: flex;
  }
`;

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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          layout
        >
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
  const { setTheme } = useTheme("theme");

  const switchThemeHandler = (): void => {
    send("SWITCH");
    setTheme(isDarkTheme ? "dark" : "light");
  };

  return (
    <Wrapper>
      <Content>
        <h1>Theme toggler</h1>
        <Box isAnimating={isVisible} switchThemeHandler={switchThemeHandler} />
        <div className="btns">
          <button type="button" onClick={() => send("TURN_ON")}>
            open
          </button>
          <button type="button" onClick={() => send("TURN_OFF")}>
            Close
          </button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default SimpleThemeToggler;
