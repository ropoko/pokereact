import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff7f5;
    height: 100vh;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-thumb {
    background: #ed5c5c;
    height: 10.05vh;
  }

  body::-webkit-scrollbar-track {
    background: #f2eae9;
  }

  :root {
    font-size: 62.5%;
  }

  .App {
    min-height: 100vh;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 4rem;
  }

  .footer {
    margin-bottom: 1rem;
    height: 20px;
  }

  @media (min-width: 375px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1366px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1920px) {
    .grid-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
