import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body{
  margin: 0;
  background-color: #7AC142;
  font-family:  "Source Code Pro", sans-serif; ;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  padding-bottom: 20px;
}

button, input  {
  font-family: inherit;
}
`;
