import {Global, css} from "@emotion/react"

const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
        :root {
          /* Define Colors as colors */
          --green: #00ebc7;
          --red: #ff5470;
          --yellow: #fde24f;
          --blueGreen: #7fdbca;
          --black: #1b2d45;
          --dark: #0e182a;
          --dark2: #232946;
          --pink: #eebbc3;
          --white: #fffffe;
          --greyish: #b8c1ec;
          --blackTransparent: rgba(27, 45, 69, 0.4);
          --white: #feffff;
          --darkBlue: #00214d;
          --grey: #bfbfbf;
          --lightGrey: #f2f4f6;
          --transparentDark: rgba(0, 0, 0, 0.05);
          --transparentDark2: rgba(0, 0, 0, 0.1);
          --transparentDark3: rgba(0, 0, 0, 0.06);

          /* Define Colors intentions */
          --primary: var(--green);
          --danger: var(--red);
          --background: var(--lightGrey);
          --headerAndFooterBg: var(--black);
          --headerAndFooterColor: var(--white);
          --textColor: var(--black);
          --borderLeftColor: var(--black);

          /* elements */
          --bg: var(--lightGrey);
          --paragraph: var(--greyish);
          --button: var(--green);
          --button-text: var(--dark);
          --link-color: var(--dark2);
          --strokeColor: var(--green);
          --common: var(--darkBlue);
          --common-text: var(--white);

          /* Styles */

          --line: solid 1px var(--lineColor);
          /* Elevations */
          --shadowXs: 0 0 0 1px var(--transparentDark);
          --shadowS: 0 1px 2px 0 var(--transparentDark);
          --shadow: 0 1px 3px 0 var(--transparentDark2), 0 1px 2px 0 var(--transparentDark3);
          --shadowMd: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadowLg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadowXl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --shadow2Xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          --shadowInner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --shadowOutline: 0 0 0 3px rgba(66, 153, 225, 0.5);

          /* Type */
          --headingFont: "Karla", sans-serif;
          --bodyFont: "Spectral", serif;
          --h1: 4.052em;
          --h2: 3.441em;
          --h3: 2.953em;
          --h4: 2.563em;
          --h5: 1.55em;
          --smallText: 0.8em;
          /* positioning */
          --containerPadding: 2.5%;
          --headerHeight: 10rem;
          --maxWidth: 970px;
          /* Utils */
          --border-radius: 4px;
          --border-radius-secondary: 6px;
          /* transitions */
          --mainTrans: 300ms ease-in all;
          --secondaryTransition: 500ms ease-in all;
        }
        *::before,
        *::after,
        * {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }
        html {
          font-size: 112.5%;
          scroll-behavior: smooth;
          box-sizing: border-box;
        }
        /*18px*/
        body {
          font-family: var(--bodyFont);
          font-weight: 400;
          line-height: 1.65;
          background: var(--bg);
          color: var(--textColor);
          height: 100%;
        }
        body[data-theme="light"] {
          --bg: var(--lightGrey);
          --textColor: var(--black);
          --background: var(--white);
          --lineColor: var(--green);
          --strokeColor: var(--red);
        }
        body[data-theme="dark"] {
          --bg: var(--dark);
          --textColor: var(--white);
          --background: var(--dark);
          --lineColor: var(--green);
          --strokeColor: var(--blueGreen);
        }
        ul,
        li {
          list-style: none;
        }
        li {
          text-decoration: none;
        }
        a {
          text-decoration: none;
          color: var(--link-color);
          font-family: var(--headingFont);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--headingFont);
        }
        h1 {
          font-size: var(--h1);
        }
        h2 {
          font-size: var(--h2);
        }
        h3 {
          font-size: var(--h3);
        }
        h4 {
          font-size: var(--h4);
        }
        h5 {
          font-size: var(--h5);
        }
        p {
          font-family: var(--bodyFont);
          margin-bottom: 0.5rem;
        }
      `}
    />
  )
}

export default GlobalStyles
