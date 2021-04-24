import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

const SpinnerWrapper = styled(motion.aside)`
  min-width: 30rem;
  min-height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingSpinner = (): JSX.Element => {
  return (
    <SpinnerWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="part part-one"
        initial={{ x: -60 }}
        animate={{ x: 300 }}
        style={{
          width: "10rem",
          height: "1.5rem",
          background: "var(--cyan-process)",
          borderRadius: 4,
        }}
        transition={{ duration: 0.5, flip: Infinity }}
      />
      <motion.div
        className="part part-two"
        initial={{ x: -30 }}
        animate={{ x: 200 }}
        style={{
          width: "20rem",
          height: "1rem",
          background: "var(--red)",
          borderRadius: 4,
        }}
        transition={{ duration: 0.6, flip: Infinity }}
      />
      <motion.div
        className="part part-three"
        initial={{ x: -60 }}
        animate={{ x: 300 }}
        style={{
          width: "14rem",
          height: "1rem",
          background: "var(--green)",
          borderRadius: 4,
        }}
        transition={{ duration: 0.55, flip: Infinity }}
      />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
