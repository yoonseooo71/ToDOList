import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    box-sizing: border-box;
  }
  body {
    user-select: none;
    background-color: #90caf9;
  }
  input {
    border: none;   
  }
  input:focus {
    outline: none;
  } 
`
export default GlobalStyle; 