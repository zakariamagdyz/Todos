import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  /* direction:rtl; */

  @media (max-width:750px){

    font-size:50%;
    
  } 
  @media (max-width:550px){

font-size:45%;

} 
}



body {
  font-size: 1.6rem;
  font-family: Helvetica, sans-serif;
  color: #444;
  background-color: #476486; 
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
//sdasdsdasd
