import { createGlobalStyle, css } from "styled-components";
import { themes } from "../themes";

export const calculateLetterSpacing = (
  fontSize: string,
  percent: number = 0.02
) => {
  const fontSizeNumber = parseFloat(fontSize);
  return `${fontSizeNumber * percent}px`;
};

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  textarea,
  input {
    outline: none !important;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none !important;
  }

  html {
    visibility: visible;
    opacity: 1;
  }

  a {
    color: ${themes?.default?.colors?.primary} !important;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

const scrollApp = css`
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a5;
    border-radius: 16px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${scrollApp}
`;

export default GlobalStyle;
