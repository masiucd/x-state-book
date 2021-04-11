import styled from "@emotion/styled";
import { useToggle } from "@hooks/toggle";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  position: relative;
  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const List = styled(motion.ul)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  li {
    a {
      color: var(--textColor);
    }
  }
`;

const routes = [
  { name: "simple-count", path: "/" },
  { name: "toggler-theme", path: "/toggler-theme" },
  { name: "timer", path: "/timer" },
];

const Nav = (): JSX.Element => {
  const { state, toggle } = useToggle();

  return (
    <NavBar>
      <AnimatePresence>
        {state && (
          <List
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {routes.map(({ name, path }) => (
              <motion.li key={name} whileHover={{ scale: 1.05 }}>
                <Link to={path}>{name}</Link>{" "}
              </motion.li>
            ))}
          </List>
        )}
      </AnimatePresence>
      <button onClick={toggle}>Menu</button>
    </NavBar>
  );
};

export default Nav;
