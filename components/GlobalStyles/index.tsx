import { Global, css, useTheme } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mq from '../_media';

const GlobalStyles = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <>
      <Global styles={css`
      html {
          line-height: 1.15; /* 1 */
          -ms-text-size-adjust: 100%; /* 2 */
          -webkit-text-size-adjust: 100%; /* 2 */
      }

      body {
          margin: 0;
          color: ${theme.colors.text};
          background-color: ${theme.colors.background};
      }

      p {
        line-height: 24px;
      }

      article,
      aside,
      footer,
      header,
      nav,
      section {
          display: block;
      }

      h1 {
          font-size: 2em;
          margin: .67em 0;
      }

      figcaption,
      figure,
      main {
          /* 1 */
          display: block;
      }

      figure {
          margin: 1em 40px;
      }

      hr {
          box-sizing: content-box; /* 1 */
          height: 0; /* 1 */
          overflow: visible; /* 2 */
      }

      pre {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
      }

      a {
          text-decoration: none;
          background-color: transparent; /* 1 */
          -webkit-text-decoration-skip: objects; /* 2 */
      }

      abbr[title] {
          border-bottom: none; /* 1 */
          text-decoration: underline; /* 2 */
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
      }

      b,
      strong {
          font-weight: inherit;
      }

      b,
      strong {
          font-weight: bolder;
      }

      code,
      kbd,
      samp {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
      }

      dfn {
          font-style: italic;
      }

      mark {
          background-color: #ff0;
          color: #000;
      }

      small {
          font-size: 80%;
      }

      sub,
      sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
      }
      
      sub {
          bottom: -0.25em;
      }
      
      sup {
          top: -0.5em;
      }

      
      audio,
      video {
          display: inline-block;
      }

      audio:not([controls]) {
          display: none;
          height: 0;
      }

      img {
          border-style: none;
      }

      svg:not(:root) {
          overflow: hidden;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
          font-family: 'Open Sans', sans-serif; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
      }

      button,
      input {
          /* 1 */
          overflow: visible;
      }

      button,
      select {
          /* 1 */
          text-transform: none;
      }

      button,
      html [type="button"],
          /* 1 */
      [type="reset"],
      [type="submit"] {
          -webkit-appearance: button; /* 2 */
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
          border-style: none;
          padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
          outline: 1px dotted ButtonText;
      }

      fieldset {
          padding: .35em .75em .625em;
      }

      legend {
          box-sizing: border-box; /* 1 */
          color: inherit; /* 2 */
          display: table; /* 1 */
          max-width: 100%; /* 1 */
          padding: 0; /* 3 */
          white-space: normal; /* 1 */
      }

      progress {
          display: inline-block; /* 1 */
          vertical-align: baseline; /* 2 */
      }

      textarea {
          overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
          height: auto;
      }

      [type="search"] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
      }

      [type="search"]::-webkit-search-cancel-button,
      [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
      }

      details,
          /* 1 */
      menu {
          display: block;
      }

      summary {
          display: list-item;
      }

      canvas {
          display: inline-block;
      }

      template {
          display: none;
      }

      [hidden] {
          display: none;
      }

      html {
          box-sizing: border-box; /* 1 */
          font-family: 'Open Sans', sans-serif; /* 2 */
      }
      
      *,
      *::before,
      *::after {
          box-sizing: inherit;
      }

      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre {
          margin: 0;
      }
      
      button {
          background: transparent;
          padding: 0;
      }

      button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
      }
      
      fieldset {
          margin: 0;
          padding: 0;
      }
      
      ol,
      ul {
          margin: 0;
      }

      [tabindex="-1"]:focus {
          outline: none !important;
      }


      *,
      *::before,
      *::after {
          border-width: 0;
          border-style: solid;
          border-color: currentColor;
      }

      img {
          border-style: solid;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
          border-radius: 0;
      }
      
      textarea {
          resize: vertical;
      }
      
      img {
          max-width: 100%;
      }
      
      button,
      input,
      optgroup,
      select,
      textarea {
          font-family: inherit;
      }
      
      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
          color: inherit;
          opacity: .5;
      }
      
      input::-moz-placeholder,
      textarea::-moz-placeholder {
          color: inherit;
          opacity: .5;
      }
      
      input::-ms-input-placeholder,
      textarea::-ms-input-placeholder {
          color: inherit;
          opacity: .5;
      }
      
      input::placeholder,
      textarea::placeholder {
          color: inherit;
          opacity: .5;
      }
      
      button,
      [role=button] {
          cursor: pointer;
      }

      .unselectable {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;           /* Non-prefixed version, currently
                                        not supported by any browser */
      }

      .container {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: 0 30px 0 30px;
      }
      .wrapper {
        max-width: 1190px;
        width: 100%;
        padding: 0 30px 0 30px;
        margin: 0 auto;
        ${mq[1]} {
          padding: 0 18px 0 18px;
        }
      }

      [tabindex='-1']:focus {
        outline: none;
        border: none;
      }

      .hidden-sm { //768
        ${mq[2]} {
          display: none !important;
        }
      }

      .hidden-xs { //768
        ${mq[1]} {
          display: none !important;
        }
      }

      .hidden-lg { //768px
        @media (min-width: 768px) {
          display: none !important;
        }
      }

  .notify-popup {
    position: fixed;
    width: 280px;
    min-height: 125px;
    left: 24px;
    bottom: 24px;
    z-index: 100;
    padding: 22px;
    text-align: center;
    color: #fff;
    opacity: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      position: absolute;
      width: 14px;
      height: 14px;
      right: 13px;
      top: 13px;
      fill: #fff;
      cursor: pointer;
      transition: 0.2s ease-out;
      &:hover {
        transform: rotate(90deg)
      }
    }
    b {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttonItems {
      margin: 0;
      button {
        padding-left: 80px;
        padding-right: 80px;
        ${mq[1]} {
          padding-left: 40px;
          padding-right: 40px;
        }
      };
    };
    .textItem {
      display: flex;
      justify-content: space-around;
      align-items: center;
       a {
        color: ${theme.colors.primary};
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    }
}

  .input-wrapper {
    margin: 17px 0px;
    width: 540px;
    display: flex;
    ${mq[2]} {
      width: 100%;
      display: block;
    }
    label {
      display: block;
      width: 100%;
    }
    .labelTitle {
      display: block;
      width: 100%;
      font-weight: 600;
      margin-left: 12px;
      margin-bottom: 12px;
      text-align: left;
    }
    .specialInputArea {
      margin-left: 30px;
      ${mq[2]} {
        margin-left: 0;
        margin-top: 17px;
      }
    }
    span {
      display: none;
    }
    input, textarea {
      background-color: #F7F7F7;
      width: 100%;
      min-height: 58px;
      box-sizing: border-box;
      padding-left: 22px;
      border-radius: 60px;
      outline: none;
      border: solid 2px #F7F7F7;
      :focus {
        border: solid 2px ${theme.colors.primary};
      }
      ::placeholder {
        color: #888888;
      }
    }
    textarea {
      min-height: 285px;
      max-height: 285px;
      border-radius: 15px;
      padding-left: 12px;
      padding-top: 12px;
    }
    & button {
      background-color: ${theme.colors.primary};
      color: #fff;
      padding: 16px 42px;
      border-radius: 100px;
      font-weight: 300;
      text-transform: uppercase;
      outline: none;
      position: relative;
      :hover {
        background: linear-gradient(90deg, #4970A8 0%, #8497F9 108%),
      }
      :active {
        top: 1px;
      }
    }
}


`}
      />
    </>
  );
};

export default GlobalStyles;
