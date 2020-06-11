import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  touch-action: manipulation;
  user-select: none;   
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;  
  position: relative;
}

.section-title {
  font-size: 3.6rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 8rem;
}

a {
  text-decoration: none;
}


input {
    border-radius: 0;
    -webkit-appearance: none;
}

`;
