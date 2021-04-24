import { css } from "@emotion/react"
import { colorIntentions, elevations } from "./styled-variables"

export const resetButtonStyles = css`
  border: none;
  font-size: 1.1rem;
  border: none;
  width: 8rem;
  height: 2rem;
  text-align: center;
  background: none;
  border: 2px solid ${colorIntentions.primary};
  border-radius: 4px;
  box-shadow: ${elevations.shadowLg};
  display: block;
  margin: 0.5rem auto;
  outline: none;
  transition: 400ms ease-in-out all;
  cursor: pointer;
  &:active {
    position: relative;
    top: 0.4rem;
    box-shadow: ${elevations.shadow2Xl};
    background-color: ${colorIntentions.danger};
  }
`
